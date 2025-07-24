import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.mainText}>1</Text>
        <Text style={styles.mainText}>2</Text>
        <Text style={styles.mainText}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
  },
  mainText: {
    borderWidth: 1,
    borderColor: "red",
    margin: 25,
    padding: 20,
    borderRadius: 10,
  },
});
