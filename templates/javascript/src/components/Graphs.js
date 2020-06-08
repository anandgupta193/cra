import React from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { getStateWise } from "../actions/index";
import NumberFormat from "react-number-format";

class Graphs extends React.Component {
  constructor(props) {
    super(props);
    this.dailydata = [[]];
    this.piedata = [];
  }
  componentDidMount() {
    this.props.getStateWise();
  }
  renderDailyData = () => {
    this.dailydata = [["Cases", "Recovered", "Confirmed", "Deceased"]];
    if (this.props.States.cases_time_series) {
      return this.props.States.cases_time_series
        .reverse()
        .slice(0, 15)
        .map((D) => {
          if (D.dailyconfirmed !== 0) {
            if (this.dailydata.length < 16) {
              this.dailydata.push([
                D.date,
                parseInt(D.dailyrecovered),
                parseInt(D.dailyconfirmed),
                parseInt(D.dailydeceased),
              ]);
            }
          }
          if (this.dailydata.length === 16) {
            this.dailydata.push([
              "Cases",
              "Recovered",
              "Confirmed",
              "Deceased",
            ]);
          }
        });
    }
  };
  renderLineData = () => {
    this.LineData = [
      ["Date", "Recovered Cases", "Confirmed Cases", "Deceased Cases"],
    ];
    if (Object.values(this.props.States.cases_time_series).length > 0) {
      return this.props.States.cases_time_series.reverse().map((Data) => {
        if (
          this.LineData.length <=
          Object.values(this.props.States.cases_time_series).length
        ) {
          if (
            Data.totalconfirmed >= "10" ||
            Data.totaldeceased >= "10" ||
            Data.totalrecovered >= "10"
          ) {
            this.LineData.push([
              Data.date,
              parseInt(Data.totalrecovered),
              parseInt(Data.totalconfirmed),
              parseInt(Data.totaldeceased),
            ]);
          }
        }
      });
    }
  };
  renderPieData = () => {
    this.piedata = [["States", "Cases"]];
    if (Object.values(this.props.States.statewise).length > 0) {
      return this.props.States.statewise.map((D) => {
        if (D.state !== "Total" && D.confirmed > 0) {
          if (
            this.piedata.length <=
            Object.values(this.props.States.statewise).length
          ) {
            this.piedata.push([D.state, parseInt(D.confirmed)]);
          }
        }
      });
    }
  };
  renderDate() {
    this.date = this.props.States.cases_time_series;
    return (
      <p
        style={{ fontFamily: "Ubuntu", fontSize: "1rem" }}
        className="text-center lead"
      >
        {this.date[0].date}-{this.date[this.date.length - 1].date}
      </p>
    );
  }

  renderSampleData() {
    this.oldSampleData = [["Date", "Sample Tested"]];
    this.newSampleData = [["Date", "Sample Tested"]];
    if (this.props.States.tested.length != 0 && this.oldSampleData.length || this.newSampleData.length === 1) {
      return this.props.States.tested.map((old) => {
        if (
          old.positivecasesfromsamplesreported ||
          old.samplereportedtoday !== ""
        ) {
          this.oldSampleData.push([
            old.updatetimestamp,
            parseInt(old.samplereportedtoday),
          ]);
          this.newSampleData.push([
            old.updatetimestamp,
            parseInt(old.positivecasesfromsamplesreported),
          ]);
        }
      });
    }
  }
  render() {
    if (this.props.States.statewise) {
      this.renderPieData();
      this.renderDailyData();
      this.dailydata.reverse().pop();
      this.renderLineData();
      this.renderSampleData();
      console.log(this.oldSampleData);
      console.log(this.newSampleData);
    }
    if (!this.props.States.statewise) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="p-md-3 mb-3 mt-3">
        <div className="row">
          <div className="col-md-7 col-sm-12 mb-3">
            <h3
              className="text-center mb-2 mt-2"
            >
              Daily Cases Report
            </h3>
            <Chart
              width={"100%"}
              height={"500px"}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={this.dailydata}
              options={{
                title: "Cases Recorded in previous 15 days",
                vAxis: { title: "Cases per Day" },
                hAxis: { title: "Date" },
              }}
            />
          </div>
          <div className="col-md-5">
            <h3
              style={{ fontFamily: "Ubuntu" }}
              className="text-center mb-2 mt-2"
            >
              Affected States & UT's ({this.piedata.length - 1})
            </h3>
            <Chart
              width={"100%"}
              height={"500px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.piedata}
              options={{
                title: "Most Affected States",
                is3D: true,
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3
              style={{ fontFamily: "Ubuntu" }}
              className="text-center mb-2 mt-2"
            >
              TOTAL CASES IN INDIA
              {this.renderDate()}
            </h3>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="ScatterChart"
              loader={<div>Loading Chart</div>}
              data={this.LineData}
              options={{
                hAxis: { title: "Date" },
                vAxis: { title: "Cases" },
                legend: "none",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    States: state.StateData,
  };
};
export default connect(mapStateToProps, { getStateWise })(Graphs);
