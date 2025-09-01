import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Wait from "./Wait";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsBusters`;
  }

  // fetch articles from API
  updatePage = async (props) => {
    this.setState({ loading: true });
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles || [],
      totalArticles: parsedData.totalResults || 0,
      loading: false,
    });
    this.props.setProgress(100)
  };

  componentDidMount() {
    this.updatePage();
  }
 fetchmoreData = async () => {
  this.setState(
    prevState => ({ page: prevState.page + 1 }),
    async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles) || [],
        totalArticles: parsedData.totalResults || 0
      });
    }
  );
};


  // handlePreviousClick = () => {
  //   this.setState(
  //     (prevState) => ({ page: prevState.page - 1 }),
  //     this.updatePage
  //   );
  // };

  // handleNextClick = () => {
  //   this.setState(
  //     (prevState) => ({ page: prevState.page + 1 }),
  //     this.updatePage
  //   );
  // };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0" }}>
          News Busters - Top {this.capitalize(this.props.category)} Headlines
        </h1>

        {this.state.loading && <Wait />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchmoreData}
          hasMore={this.state.articles.length<this.state.totalArticles}
          loader={<Wait/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  source={element.source.name}
                  title={
                    element.title
                      ? element.title.slice(0, 45) + "..."
                      : "No Title"
                  }
                  url={element.url}
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : "No Description"
                  }
                  imageurl={element.urlToImage}
                  date={element.publishedAt}
                  author={element.author}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>

          <button
            type="button"
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalArticles / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
