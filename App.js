/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Otp from './Containers/Otp.js';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.headerText}>OTP SCREEN</Text>
         </View>
          <View style={styles.otpView}>
           <Otp />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    header:{
    flex: 0.4,
     justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'grey'
  },
    otpView:{
    flex: 0.6,
     // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'lightgrey',
  },
    headerText:{
    color:"black",
    fontSize:20,
    fontWeight:'600'
  },
});
