/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ScrollView,
  TextInput
} from "react-native";
import { Formik } from "formik";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withFormikControl
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputScrollView from "react-native-input-scroll-view";
type Props = {};
const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(ScrollView, {
  submitAfterLastInput: false
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required field"),
  lastName: Yup.string().required("Last name is required field"),
  phone: Yup.string()
    .required("Phone number is required field")
    .matches(/^\d{10}$/, {
      message: "Please enter valid phone number"
    }),
  email: Yup.string()
    .required("Email Address is required field")
    .email(),
  password: Yup.string()
    .required("Password is required field")
    .min(6, "Too short"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Too short")
    .oneOf([Yup.ref("password"), null], "Passwords don't match"),
  star: Yup.boolean()
    .required()
    .oneOf([true])
});
export default class SignUpFormik extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setDate(newDate) {
    console.log("newDate", newDate);
    this.setState({ chosenDate: newDate });
  }

  onSubmit(values) {
    alert("dsjfhjkdsfh");
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
          <ScrollView>
            <Formik
              onSubmit={values => alert(JSON.stringify(values))}
              validationSchema={validationSchema}
              initialValues={{
                email: "",
                password: "",
                firstName: "",
                phone: "",
                lastName: "",
                confirmPassword: ""
              }}
            >
              {props => {
                return (
                  <Form style={{ padding: 20 }}>
                    <KeyboardAwareScrollView>
                      <MyInput
                        // containerStyle={{ padding: 10 }}
                        label="First name"
                        name="firstName"
                        type="firstName"
                        tintColor="grey"
                        inputContainerStyle={{
                          borderWidth: 1,
                          borderColor: "grey",
                          paddingLeft: 10
                          // backgroundColor: "lightblue"
                        }}
                        // containerStyle={{ backgroundColor: "pink" }}
                        labelTextStyle={{ marginLeft: 10 }}
                      />

                      <MyInput
                        label="Last name"
                        name="lastName"
                        type="lastName"
                        tintColor="grey"
                        inputContainerStyle={{
                          borderWidth: 1,
                          borderColor: "grey",
                          paddingLeft: 10
                          // backgroundColor: "lightblue"
                        }}
                        // containerStyle={{ backgroundColor: "pink" }}
                        labelTextStyle={{ marginLeft: 10 }}
                      />

                      <MyInput
                        label="Phone"
                        name="phone"
                        type="phone"
                        tintColor="grey"
                      />
                      <MyInput
                        label="Email"
                        name="email"
                        type="email"
                        tintColor="grey"
                      />
                      <MyInput
                        label="Password"
                        name="password"
                        type="password"
                        tintColor="grey"
                      />
                      <MyInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="confirmPassword"
                        tintColor="grey"
                        secureTextEntry={true}
                      />
                      <Button onPress={props.handleSubmit} title="SUBMIT" />
                    </KeyboardAwareScrollView>
                  </Form>
                );
              }}
            </Formik>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "black"
  }
});
