import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import OTPVerify from './Components/OTPVerify/OTPVerify';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import AdminLogin from './Components/AdminLogin/AdminLogin';
const LoginStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{headerShown: false}}
        component={Signup}
      />
      <Stack.Screen
        name="OTPVerify"
        component={OTPVerify}
        options={{headerTitle: 'Verify your OTP'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerTitle: 'Change your Pasword'}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="AdminLogin"
        options={{headerShown: false}}
        component={AdminLogin}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
