// Formik x React Native example
import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Keyboard,
  Image,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Body, CheckBox } from "native-base";

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
    }),
  isChecked: Yup.bool().oneOf([true], "Field must be checked")
});

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
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
    this.focusNextField("password");
  }
  onSubmitPasswordInput() {
    this.focusNextField("confirmPassword");
  }
  onSubmitConfrimPasswordInput() {
    this.focusNextField("phone");
  }
  onChecking() {
    this.setState({
      isChecked: !this.state.isChecked
    });
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
          <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <CardItem>
              <Body style={{ alignItems: "center" }}>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    confirmPassword: "",
                    phone: "",
                    isChecked: false
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={values => alert(JSON.stringify(values))}
                >
                  {props => {
                    console.log("nbcnsdbfhdsfgf", props);
                    return (
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
                        <TouchableOpacity
                          onPress={() =>
                            props.setFieldValue(
                              "isChecked",
                              !props.values.isChecked
                            )
                          }
                        >
                          {props.values.isChecked ? (
                            <Image
                              source={{
                                uri:
                                  "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14595717.jpg"
                              }}
                              style={{ height: 25, width: 25 }}
                            />
                          ) : (
                            <Image
                              source={{
                                uri:
                                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADo6OgwMDAgICA3NzeWlpZhYWFLS0va2trV1dWSkpLHx8fS0tK6urpBQUFZWVknJyfe3t5paWl1dXWvr68YGBgODg5TU1P19fV2dnbCwsJcXFympqagoKBtbW20tLSyCVaBAAAClklEQVR4nO3d/U4aQRSGcb52WRBQKkoRUO//Kg1pbDqT2n0zZ5p32jy/CzicxwUZ/prJBAAAAAAAAAAA4B+06Q9DN/fqhkO/+Tt55+W0Hctz9b7Xozsqc7xW7Vsv3EG/sV/VC7xzx3yhrxXY0gcw9Vgn8N7d8QdDjcB2n+BNhafY6mfw02s0cOsuGBX9j7p3B4zqYoFX9/6C91Che3vFIhL47t5eEjmjDvmwy24981rvHvKlluWBp2zU/lvgr1XPKj8ll486p4MWp3pbhpyyHzrb4knZt30bT/BmnS5W/q2fHtgCb/fqviebvRTP6ZI5u4obRj0lm5Wfv+eNvknzw2T5sSYtnFXcMGqWbDYvnkOhD4UqCn0oVFHoQ6GKQh8KVRT6UKii0IdCFYU+FKoo9KFQRaEPhSoKfShUUehDoYpCHwpVFPpQqKLQh0IVhT4Uqij0oVBFoQ+FKgp9KFRR6EOhikIfClUU+lCootCHQhWFPhSqKPShUEWhD4UqCn0oVFHoQ6GKQh8KVRT6UKii0IdCFYU+FKoo9KFQRaEPhSoKfShUUehDoYpCHwpVFPpQqKLQh0IVhT4Uqij0oVBFoQ+FKgp9KFSlNzxGr4euaZVsVn7/YXpvfEt3WKYXFd8Xz3lL5lwqbhiV3gn8VjynT+Y0dE1n+iad9sWDNumgdu4Dfk4X25SPSgf9h3c6Z9fuThu9l/shULjLhzUpcrf65Dg+3+45Epjdndymp1DhZO/ef1T5ke2H7fhLmIUPk3fjr2FV/m3/03L8VYwe44H5+bst5ffGJ9p9ilWe4E2rn8UKn8FP6/wk2IJ93Z/kr+6e3PFate9md3FH/WIZOot+bdMfhm7u1Q0vfeD3IAAAAAAAAAAAgM8Hjiow5uDWRiAAAAAASUVORK5CYII="
                              }}
                              style={{ height: 20, width: 20 }}
                            />
                          )}
                        </TouchableOpacity>
                        {props.touched.isChecked && (
                          <Text style={{ color: "red" }}>
                            {props.errors.isChecked}
                          </Text>
                        )}
                        <Button onPress={props.handleSubmit} title="Submit" />
                      </View>
                    );
                  }}
                </Formik>
              </Body>
            </CardItem>
          </Card>
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
