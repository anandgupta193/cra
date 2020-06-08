import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "../css/StateList.css";
class Header extends React.Component {
  renderTime() {
    if (Object.values(this.props.States).length > 0) {
      return this.props.States.statewise.map(time => {
        if(time.state === 'Total') {
          var day = time.lastupdatedtime.toString().slice(0,2);
          var month = time.lastupdatedtime.toString().slice(3,5);
          var year = time.lastupdatedtime.toString().slice(6,10);
          var time = time.lastupdatedtime.toString().split(" ")[1];
          var newDate = year + "/" + month + "/" + day + " " + time;
        return (
          <span key="1" className="navbar-text">
            <p className="text-success h6"><Moment fromNow>{newDate}</Moment></p>
          </span>
        );
        }
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar sticky-top text-center navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mobile-view text-uppercase" href="#">COVID-19 Tracker</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h6>HOME</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/Global" className="nav-link">
                  <h6>WORLD STATS</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/Stats" className="nav-link">
                  <h6>STATISTICS</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/Symptoms" className="nav-link">
                  <h6>SYMPTOMS</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/QnA" className="nav-link">
                  <h6>Q&A</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/SafetyMeasures" className="nav-link">
                  <h6>SELF CARE</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Covid19/Contacts" className="nav-link">
                  <h6>HELPLINE</h6>
                </Link>
              </li>
            </ul>
            <div>Last Updated  {this.renderTime()}</div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    States: state.StateData
  };
};
export default connect(mapStateToProps)(Header);
