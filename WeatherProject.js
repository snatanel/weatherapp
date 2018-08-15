import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
console.log(OpenWeatherMap);
class WeatherProject extends Component {
  state = { zip: "", forecast: {} };
  _handleTextChange = event => {
    //this.setState({zip: event.nativeEvent.text});
    //test without calling api
    const zip = event.nativeEvent.text;
    OpenWeatherMap.fetchZipForecast(zip).then(forecast =>
      this.setState({ forecast })
    );
  };

  render() {
    const { forecast } = this.state;
    const { main, description, temp } = forecast;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You input {this.state.zip}.</Text>
        {Object.keys(forecast).length ? (
          <Forecast main={main} description={description} temp={temp} />
        ) : null}
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666666"
  },
  input: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  }
});

export default WeatherProject;
