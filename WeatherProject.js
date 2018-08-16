import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

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

    if (this.state.forecast !== null) {
      content = (<Forecast main={main} description={description} temp={temp} />)
    }

    return (      
      <View style={styles.container}>
        <ImageBackground
          source={require("./flowers.png")}
          resizeMode="cover"
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                       <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}
                  underlineColorAndroid="transparent"       
                  />
              </View>
            </View>
              {Object.keys(forecast).length ? (
                <Forecast main={main} description={description} temp={temp} />
              ) : null}
            {Object.keys(forecast).length ? (
          <Forecast main={main} description={description} temp={temp} />
        ) : null}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const baseFontSize=16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666666"
  },
  backdrop: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    padding: 30
  },
  zipContainer: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 80,
    height: baseFontSize + 10,
    justifyContent: "flex-end"
  },
  zipCode: { flex: 1 },
  mainText: { 
    fontSize: baseFontSize,
    color: "#FFFFFF",
    }
});
export default WeatherProject;
