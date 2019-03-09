/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Keyboard } from "react-native";
import TextInput from "../Components/TextInput";
type Props = {};

export default class SignUpForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      firstNameValid: false,
      lastNameValid: false,
      phoneValid: false,
      errorText: ""
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmitFirstNameInput = this.onSubmitFirstNameInput.bind(this);
    this.onSubmitLastNameInput = this.onSubmitLastNameInput.bind(this);
    this.onSubmitPhoneInput = this.onSubmitPhoneInput.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }
  onChangeFirstName(text) {
    this.setState({
      firstName: text
    });
  }
  onChangeLastName(text) {
    this.setState({
      lastName: text
    });
  }
  onChangePhone(text) {
    this.setState({
      phone: text
    });
  }
  focusNextField(id) {
    // this.lastName._root.focus();
    this.inputs[id].focus();
  }
  onSubmitFirstNameInput() {
    if (this.state.firstName.length === 0 || this.state.firstName === "") {
      this.setState({
        errorText: "",
        firstNameValid: true
      });
      this.focusNextField("lastName");
    } else {
      this.setState({
        errorText: "",
        firstNameValid: false
      });
      this.focusNextField("lastName");
    }
  }
  onSubmitLastNameInput() {
    if (this.state.lastName.length === 0 || this.state.lastName === "") {
      this.setState({
        errorText: "",
        lastNameValid: true
      });
      this.focusNextField("phone");
    } else {
      this.setState({
        errorText: "",
        lastNameValid: false
      });
      this.focusNextField("phone");
      // this.focusNextField("lastName");
    }
  }
  onSubmitPhoneInput() {
    if (this.state.phone.length === 0 || this.state.phone === "") {
      this.setState({
        phoneValid: true,
        errorText: ""
      });
      Keyboard.dismiss();
    } else if (this.state.phone.length !== 10) {
      this.setState({
        phoneValid: true,
        errorText: "Please enter valid phone number"
      });
      Keyboard.dismiss();

      // this.focusNextField("lastName");
    } else {
      this.setState({
        phoneValid: false,
        errorText: ""
      });
      Keyboard.dismiss();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "800" }}>
            Sign Up
          </Text>
        </View>
        <View style={{ flex: 0.9 }}>
          <ScrollView style={{ marginTop: 10 }}>
            <View style={{ alignItems: "center" }}>
              <TextInput
                onRef={ref => {
                  this.inputs["firstName"] = ref;
                }}
                placeholder="First name"
                value={this.state.firstName}
                onChangeText={this.onChangeFirstName}
                onSubmitEditing={this.onSubmitFirstNameInput}
                validation={this.state.firstNameValid}
                errorText={this.state.errorText}
              />
              <TextInput
                onRef={ref => {
                  this.inputs["lastName"] = ref;
                }}
                placeholder="Last name"
                value={this.state.lastName}
                onChangeText={this.onChangeLastName}
                onSubmitEditing={this.onSubmitLastNameInput}
                validation={this.state.lastNameValid}
                errorText={this.state.errorText}
              />
              <TextInput
                onRef={ref => {
                  this.inputs["phone"] = ref;
                }}
                placeholder="Phone"
                value={this.state.phone}
                onChangeText={this.onChangePhone}
                onSubmitEditing={this.onSubmitPhoneInput}
                validation={this.state.phoneValid}
                errorText={this.state.errorText}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "pink"
  }
});
