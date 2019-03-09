/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Login.js";
import Otp from "./Otp.js";
import RatingComponent from "./RatingComponent.js";
import GmailAuth from "./GmailAuth.js";
import SignUpFormik from "./SignUpFormik.js";
import SignUpForm from "./SignUpForm.js";
import Registration from "./Registration.js";

const RootNavigator = createStackNavigator(
  {
    Registration: { screen: Registration },
    SignUpForm: { screen: SignUpForm },
    SignUpFormik: { screen: SignUpFormik },
    GmailAuth: { screen: GmailAuth },
    Login: { screen: Login },
    Otp: { screen: Otp },
    RatingComponent: { screen: RatingComponent }
  },
  {
    initialRouteName: "Registration",
    headerMode: "none"
  }
);

const AppNavigator = createAppContainer(RootNavigator);
export default AppNavigator;
