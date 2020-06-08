import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";
import Moment from "react-moment";

class NewsList extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }
  renderNews = () => {
    if (this.props.News.articles) {
      return this.props.News.articles.map(N => {
        return (
          <React.Fragment key={N.title}>
            <div className="row container shadow-sm mb-3">
              <div className="col-md-4 text-center">
                <img
                  src={N.urlToImage}
                  className="mt-md-5 mt-sm-1 img-thumbnail"
                  alt={N.title}
                />
              </div>
              <div className="col-md-8">
                <p className="h5 mt-2">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href={N.url}
                    target="_blank"
                  >
                    {N.title}
                  </a>
                </p>
                <p className="h6">{N.description}</p>
                <p className="card-text float-left">
                  <small className="text-muted">
                    By-<span className="font-weight-bold">{N.source.name}</span>
                  </small>
                </p>
                <p className="card-text float-right">
                  <small className="text-muted">
                    <Moment fromNow>{N.publishedAt}</Moment>
                  </small>
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      });
    }
  };
  render() {
    if(!this.props.News.articles) {
      return (<div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>{this.renderNews()}</React.Fragment>
      );
  }
}
const mapStateToProps = state => {
  return {
    News: state.News
  };
};
export default connect(mapStateToProps, { getNews })(NewsList);
