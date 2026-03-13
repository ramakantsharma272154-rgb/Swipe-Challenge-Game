import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GameOver({ score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.score}>Final Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  score: {
    fontSize: 24,
    marginTop: 10,
  },
});
