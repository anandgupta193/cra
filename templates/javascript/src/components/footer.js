import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-body">
            <p className="h6 card-title text-uppercase"><em>"Stay home. Save lives. Help stop coronavirus"

</em></p>
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc_2y5N0I67wDU38DjDh35IZSIS30rQf7_NYZhtYYGU1jJYT6_kDx4YpF-qw0LSlGsBYP8pqM_a1Pd/pubhtml"
              className="m-1 btn btn-outline-dark"
            >
              <i className="database icon"></i><span className="h6">DATA SOURCE</span>
            </a>
            <a
              href="https://newsapi.org/"
              className="m-1 btn btn-outline-dark"
            >
              <i className="newspaper icon"></i><span className="h6">NEWS SOURCE</span>
            </a><br/>
            <a
              href="http://shubhamsweb.in"
              className="m-1 btn text-center"
            >
              <i className="globe olive circular large icon"></i>
            </a>
            <a
              href="https://twitter.com/hashtag/covid19"
              className="m-1 btn text-center"
            >
              <i className="twitter circular teal large icon"></i>
            </a>
            <a
              href="https://github.com/shubhamsWEB/COVID-19-TRACKER"
              className="btn text-center"
            >
              <i className="github circular large icon"></i>
            </a>
            <a
              href="https://t.me/MyGovCoronaNewsDesk"
              className="btn text-center"
            >
              <i className="telegram blue circular large icon"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;
