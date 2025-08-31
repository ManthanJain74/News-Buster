import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, url, author, date,source } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                imageurl && imageurl !== "null"
      ? imageurl
      : "https://pyxis.nymag.com/v1/imgs/34a/228/faa988e459047582a5e62f12ebcd7d77f8-caitlin-covington-christian-girl-autumn.1x.rsocial.w1200.jpg"
                
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {title}
                  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"80%",zIndex:'1'}}>
                    {source}
                  </span>
                
              </h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on {date}
                </small>
              </p>
              <a href={url} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
