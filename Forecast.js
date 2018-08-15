import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{this.props.main}</Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>{this.props.temp} ºF</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    color: "#FFFFFF"
  },
  bigText: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF"
  }
});

export default Forecast;
