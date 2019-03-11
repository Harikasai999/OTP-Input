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

export default class FormikTextInput extends Component<Props> {
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
      onBlur,
      errors,
      touched,
      onSubmitEditing,
      secureTextEntry
    } = this.props;

    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={[
            styles.textInputContainer,
            {
              borderColor: errors && touched ? "red" : "black"
            }
          ]}
          ref={input => (this.textInput = input)}
          onChangeText={text => onChangeText(text)}
          onBlur={text => onBlur(text)}
          value={value}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
        />
        {errors && touched && <Text style={styles.textStyle}>{errors}</Text>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInputContainer: {
    height: 44,
    width: 300,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10
  },
  textStyle: { color: "red", marginTop: 5, marginLeft: 5 }
});
