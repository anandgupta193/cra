import React from "react";
import StateList from "../components/StateList";
import NewsList from "../components/NewsList";
import Banner from "./Banner";
import "../css/StateList.css";

class Home extends React.Component {

 
  render() {
    return (
      <React.Fragment>
        <Banner />
        <div id="ct" className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 font-weight-normal text-center">
                COVID-19 TRACKER
              </h1>
              <h5 className="text-center mb-0">
                <mark>STAY HOME STAY SAFE</mark>
              </h5>
              <br />
              <StateList />
            </div>
            <div className="col-md-6">
              <h1 className="display-4 p-1 text-center font-weight-normal">
                NEWS BULLETIN
              </h1>
              <h5 className="text-center">
                <mark>LIVE UPDATES</mark>
              </h5>
              <br />
              <NewsList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
