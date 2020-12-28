import React from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const AdminLogin = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlignVertical: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
            }}
          >
            Movie Store
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 30, fontSize: 20, marginTop: 10 }}>
          Admin Login
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            borderColor: "#808080",
            borderWidth: 0.5,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Enter your Email"
            keyboardType="email-address"
            style={{ margin: 10, width: "100%" }}
          ></TextInput>
        </View>
        <View
          style={{
            borderColor: "#808080",
            borderWidth: 0.5,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={true}
            style={{ margin: 10, width: "100%" }}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#7877fe",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          height: 36,
          margin: 30,
        }}
        onPress={() => {
          navigation.navigate("AdminHome");
        }}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <Text style={{ marginLeft: 30, marginBottom: 20, color: "#7877fe" }}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text>Are you an Client ?</Text>
          <Text> </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#7877fe",
                textDecorationLine: "underline",
              }}
            >
              Client Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AdminLogin;
