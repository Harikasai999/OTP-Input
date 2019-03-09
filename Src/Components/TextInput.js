/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
//import { Input } from "native-base";

type Props = {};

export default class Input extends Component<Props> {
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }
  focus() {
    this.textInput.focus();
  }
  render() {
    const {
      placeholder,
      value,
      onChangeText,
      onSubmitEditing,
      validation,
      errorText
    } = this.props;
    console.log("mnmnmndf", errorText, " mnmnn ", validation);
    return (
      <View>
        <View
          style={[
            styles.textInputContainer,
            { borderColor: validation ? "red" : "grey" }
          ]}
        >
          <TextInput
            ref={input => (this.textInput = input)}
            placeholder={placeholder}
            placeholderTextColor="dimgrey"
            value={value}
            onChangeText={text => onChangeText(text)}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        {validation && errorText != "" && placeholder === "Phone" ? (
          <Text
            style={{ color: "red", fontSize: 12, marginTop: 5, marginLeft: 2 }}
          >
            {errorText}
          </Text>
        ) : validation ? (
          <Text
            style={{ color: "red", fontSize: 12, marginTop: 5, marginLeft: 2 }}
          >
            {placeholder} is required field
          </Text>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInputContainer: {
    height: 50,
    width: 330,
    // backgroundColor: "lightgreen",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    padding: 5
  }
});
