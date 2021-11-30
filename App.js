import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dayleats</Text>
      <Text style={styles.emoji}>🛒</Text>
      <Text style={styles.version}>V.0.1</Text>
      <Button title="Se connecter"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: 50,
  },
  version: {
    position: 'absolute',
    fontSize: 10,
    color: "grey",
    paddingTop: 750,
  },
});
