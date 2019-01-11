import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, NetInfo, } from 'react-native';

const axios = require('axios')

export default class App extends Component {
  state = {
    result: ''
  }
  try = () => {
    console.log('object')
  }
  getData = async () => {
    try {
      response = NetInfo.isConnected ? await axios.get("http://192.168.56.1/webpage/getWarning.php") : alert('No internet')
      await console.log('payload', response.data)
      await this.setResult(response.data)
    } catch {
      // alert('An error has occured')
      console.log('error')
    }
  }
  setResult = (response) => {
    response.map(item => {
      this.setState({
        result: item
      })
    })
  }
  render() {
    const red = '#9C090E'
    const orange = '#FF760B'
    const yellow = '#F0C415'
    const disabled = '#3C3C3C'
    let warningColor = this.state.result.warning

    console.log(this.state)
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./mountain.jpg')} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.title}>LANDSLIDE <Text style={{ fontWeight: 'normal', fontSize: 36 }}>ADVISORY</Text></Text>
          </View>
          <View style={[styles.warning, { backgroundColor: warningColor === 'Red' ? red : disabled }]}>
            <View style={{ flex: 1.1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}>RED </Text>
              <Text style={{ fontWeight: 'normal', fontSize: 30, color: '#fff' }}>WARNING</Text>
            </View>
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'normal', fontSize: 16, color: '#fff' }}>
                Highly Susceptible! Be Alert and Ready to Evacuate.</Text></View>
          </View>

          <View style={[styles.warning, { backgroundColor: warningColor === 'Orange' ? orange : disabled  }]}>
            <View style={{ flex: 1.1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}>ORANGE </Text>
              <Text style={{ fontWeight: 'normal', fontSize: 30, color: '#fff' }}>WARNING</Text>
            </View>
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'normal', fontSize: 16, color: '#fff' }}>
                Susceptible! Be Cautious.</Text></View>
          </View>

          <View style={[styles.warning, { backgroundColor: warningColor === 'Yellow' ? yellow : disabled  }]}>
            <View style={{ flex: 1.1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff' }}>YELLOW </Text>
              <Text style={{ fontWeight: 'normal', fontSize: 30, color: '#fff' }}>WARNING</Text>
            </View>
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'normal', fontSize: 16, color: '#fff' }}>
                Marginally Stable! Be Prepared.</Text></View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 18, color: '#fff' }}>San Martin, Angono, Rizal</Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.result.timestamp}</Text>
          </View>
          <View onPress={this.getData()} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  warning: {
    flex: 1,
    maxHeight: 120,
    width: '80%',
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    // borderRadius: 75
  }
});


