import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center p-4 mb-0 jumbotron-fluid">
          <div className="container">
            <p className="h6">
              <em>
                “It's not how much we give but how much love we put into giving.”
              </em>
            </p>
            <a
              rel="noopener noreferrer"
              href="https://www.pmindia.gov.in/en/?query#"
              target="_blank"
              className="m-1 btn btn-outline-success"
            >
              <i className="certificate icon"></i>
              <span className="h6">PM CARES FUND</span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Banner;
