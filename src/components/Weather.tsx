import "./Weather.css";

import React from "react";

interface WeatherProps {}

class Weather extends React.Component<WeatherProps> {
  state = {
    lat: null,
    err: null,
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => (this.setState(lat) = position.coords.latitude),
      (err) => this.setState({ err })
    );
  }

  componentDidUpdate() {
    console.log(`Geo Position: `, this.state.position);
    console.log(`Geo Error: `, this.state.err);
  }

  render() {
    return <div>{}</div>;
  }
}

export default Weather;
