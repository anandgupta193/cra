import React from "react";
import ReactGlobe, {
  defaultDotMarkerOptions,
  defaultFocusOptions,
} from "react-globe";
import "../css/Globe.css";
import { fetchWorldData, getStateWise } from "../actions";
import { connect } from "react-redux";
class Globe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Country: null,
      Conf: null,
      Recov: null,
      Active: null,
      Deceased: null,
    };
  }
  componentDidMount() {
    this.props.fetchWorldData();
    this.props.getStateWise();
    this.Max = 0;
  }

  renderMarker() {
    if (this.props.WorldData.length > 0) {
      return this.props.WorldData.map((Country, key) => {
        Country.id = key + 1;
        Country.coordinates = [Country.lat, Country.lng];
        Country.value = 1;
        if (this.Max < Country.totalConfirmed) {
          this.Max = parseInt(Country.totalConfirmed);
        }
      });
    }
  }
  renderColor() {
    if (this.props.WorldData.length > 0) {
      return this.props.WorldData.map((Country, key) => {
        const Confirmed = parseInt(Country.totalConfirmed);

        if (Confirmed <= parseInt(2000)) {
          Country.color = "#00FFFF";
        } else if (Confirmed > parseInt(2000) && Confirmed <= parseInt(10000)) {
          Country.color = "#FFCC00";
        } else if (
          Confirmed > parseInt(10000) &&
          Confirmed <= parseInt(50000)
        ) {
          Country.color = "#CA0B00";
        } else {
          Country.color = "#800000";
        }
      });
    }
  }
  onClickMarker = (marker, markerObject, event) => {
    this.setState({
      Country: `${marker.country}`,
      Active: `Active: ${marker.activeCases}`,
      Conf: `Confirmed: ${marker.totalConfirmed}`,
      Deceased: `Deceased: ${marker.totalDeaths}`,
      Recov: `Recovered: ${marker.totalRecovered}`,
    });
  };
  onDefocus = () => {
    this.setState({
      Country: null,
      Active: null,
      Conf: null,
      Deceased: null,
      Recov: null,
    });
  };
  render() {
    this.renderMarker();
    this.renderColor();
    if (this.props.WorldData.length > 0) {
      const data = this.props.WorldData;
      return (
        <div>
          <div
            style={{
              position: "absolute",
              color: "#fff",
              background: "rgba(0,0,0,.7)",
              borderRadius: "5px",
            }}
            className="text-center c-data p-2 mt-3 ml-3"
          >
            <p className="h3">{this.state.Country}</p>
            <p className="h5" style={{ color: "#DC3545" }}>
              {this.state.Conf}
            </p>
            <p className="h5" style={{ color: "#527BFF" }}>
              {this.state.Active}
            </p>
            <p className="h5" style={{ color: "#28A745" }}>
              {this.state.Recov}
            </p>
            <p className="h5" style={{ color: "#6C757D" }}>
              {this.state.Deceased}
            </p>
          </div>
          <ReactGlobe
            onDefocus={this.onDefocus}
            onClickMarker={this.onClickMarker}
            markers={data}
            globeOptions={{
              glowCoefficient: 0.1,
              glowColor: "#FF6B89",
              glowPower: 4,
              glowRadiusScale: 0.2,
              enableGlow: true,
              cloudsOpacity: 1,
              enableClouds: true,
            }}
            markerOptions={{
              activeScale: 1.6,
              enableGlow: false,
              defaultDotMarkerOptions,
              getTooltipContent: (Country) =>
                `<h4><strong>${Country.country}</strong></h4> 
              <h6>Confirmed Cases: <span style="color: #DC3545; font-size: 1.2rem">${Country.totalConfirmed}</span></h6>
              <h6>Active Cases: <span style="color: #527BFF;font-size: 1.2rem">${Country.activeCases}</span></h6> 
              <h6>Recovered Cases: <span style="color: #28A745;font-size: 1.2rem">${Country.totalRecovered}</span>
              <h6>Deceased Cases: <span style="color: #6C757D;font-size: 1.2rem">${Country.totalDeaths}</span>`,
            }}
          />
        </div>
      );
    }

    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatsToProps = (state) => {
  return {
    WorldData: state.worldData,
  };
};
export default connect(mapStatsToProps, { fetchWorldData, getStateWise })(
  Globe
);
