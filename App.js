/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import SuperComplexRandomNumber from './SuperComplexRandomNumber';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0
    }
  }

  getRandomNumber = () => {
    console.log('Call your native module here')
    SuperComplexRandomNumber.getRandomNumber(1, 10000, (randomNumber) => {
      this.setState({ randomNumber });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Press button to get a random number</Text>
        <Button title={"Super complex random number"} onPress={this.getRandomNumber} />
        <Text style={styles.randomNumber}>{`Number: ${this.state.randomNumber}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  randomNumber: {
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'white',
    padding: 10
  }
});
