/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const axios = require('axios')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    result: ''
  }
  try = () => {
    console.log('object')
  }
  getData = async () => {
    try {
      response = await axios.get("http://192.168.190.24/TestApp/db.php")

      // axios({
      //   method:'get',
      //   url:'http://bit.ly/2mTM3nY',
      //   responseType:'stream'
      // })
      //   .then(function (response) {
      //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      //   });
      // await console.log(response)
      await this.setResult(response.data)
    } catch {
      alert('An error has occured')
    }
  }
  setResult = (response) => {
    const newAge = response.age
    const age = this.state.result.age

    // console.log('res',newAge)
    // console.log(age)
    // if (response.age !== this.state.result.age) {
    this.setState({
      result: response
    })
    // } 
    // else {
    //   console.log('no update')
    // }
  }
  warningChecker = (age) => {

    if (age < 1) {
      return (<Text>No Warning{age}</Text>)
    } else if (age < 16) {
      return (<Text>Yellow Warning{age}</Text>)
    } else if (age < 30) {
      return (<Text>Orange Warning{age}</Text>)
    } else if (age > 31) {
      return (<Text>Red Warning{age}</Text>)
    } else {

    }
  }

  // componentDidMount() {
  //   this.getData()
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {this.warningChecker(this.state.result.age)}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        {/* <Text>Name: {this.state.result.name}</Text>
        <Text>Age: {this.state.result.age}</Text> */}
        <View onPress={this.getData()} />
        {/* <Button title='get' onPress={this.getData()}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


