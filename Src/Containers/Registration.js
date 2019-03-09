// Formik x React Native example
import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Keyboard
} from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikTextInput from "../Components/FormikTextInput";
const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required field"),
  lastName: Yup.string().required("Last Name is required field"),
  email: Yup.string()
    .required("Email is required field")
    .email("Email must be a valid email"),
  password: Yup.string()
    .required("Password is required field")
    .min(6, "Too short"),
  confirmPassword: Yup.string()
    .required("Confrim password  is required field")
    .min(6, "Too short")
    .oneOf([Yup.ref("password"), null], "Passwords don't match"),
  phone: Yup.string()
    .required("Phone number is required field")
    .matches(/^\d{10}$/, {
      message: "Please enter valid phone number"
    })
});

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.focusNextField = this.focusNextField.bind(this);
    this.onSubmitFirstNameInput = this.onSubmitFirstNameInput.bind(this);
    this.onSubmitLastNameInput = this.onSubmitLastNameInput.bind(this);
    this.onSubmitEmailInput = this.onSubmitEmailInput.bind(this);
    this.onSubmitPasswordInput = this.onSubmitPasswordInput.bind(this);
    this.onSubmitConfrimPasswordInput = this.onSubmitConfrimPasswordInput.bind(
      this
    );

    this.inputs = {};
  }
  focusNextField(id) {
    // this.lastName._root.focus();
    this.inputs[id].focus();
  }
  onSubmitFirstNameInput() {
    this.focusNextField("lastName");
  }
  onSubmitLastNameInput() {
    this.focusNextField("email");
  }
  onSubmitEmailInput() {
    this.focusNextField("email");
  }
  onSubmitPasswordInput() {
    this.focusNextField("confirmPassword");
  }
  onSubmitConfrimPasswordInput() {
    this.focusNextField("phone");
  }
  onSubmi;
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
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              confirmPassword: "",
              phone: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={values => alert(JSON.stringify(values))}
          >
            {props => (
              <View>
                <FormikTextInput
                  onRef={ref => {
                    this.inputs["firstName"] = ref;
                  }}
                  onChangeText={props.handleChange("firstName")}
                  onBlur={props.handleBlur("firstName")}
                  value={props.values.firstName}
                  touched={props.touched.firstName}
                  errors={props.errors.firstName}
                  placeholder="First Name"
                  onSubmitEditing={this.onSubmitFirstNameInput}
                />
                <FormikTextInput
                  onRef={ref => {
                    this.inputs["lastName"] = ref;
                  }}
                  onChangeText={props.handleChange("lastName")}
                  onBlur={props.handleBlur("lastName")}
                  value={props.values.lastName}
                  touched={props.touched.lastName}
                  errors={props.errors.lastName}
                  placeholder="Last Name"
                  onSubmitEditing={this.onSubmitLastNameInput}
                />
                <FormikTextInput
                  onRef={ref => {
                    this.inputs["email"] = ref;
                  }}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                  touched={props.touched.email}
                  errors={props.errors.email}
                  placeholder="Email"
                  onSubmitEditing={this.onSubmitEmailInput}
                />

                <FormikTextInput
                  onRef={ref => {
                    this.inputs["password"] = ref;
                  }}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                  touched={props.touched.password}
                  errors={props.errors.password}
                  secureTextEntry={true}
                  placeholder="Password"
                  onSubmitEditing={this.onSubmitPasswordInput}
                />
                <FormikTextInput
                  onRef={ref => {
                    this.inputs["confirmPassword"] = ref;
                  }}
                  onChangeText={props.handleChange("confirmPassword")}
                  onBlur={props.handleBlur("confirmPassword")}
                  value={props.values.confirmPassword}
                  touched={props.touched.confirmPassword}
                  errors={props.errors.confirmPassword}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  onSubmitEditing={this.onSubmitConfrimPasswordInput}
                />
                <FormikTextInput
                  onRef={ref => {
                    this.inputs["phone"] = ref;
                  }}
                  onChangeText={props.handleChange("phone")}
                  onBlur={props.handleBlur("phone")}
                  value={props.values.phone}
                  touched={props.touched.phone}
                  errors={props.errors.phone}
                  placeholder="Phone Number"
                  onSubmitEditing={() => Keyboard.dismiss()}
                />

                <Button onPress={props.handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
          <Text>Forgot</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
