import React from 'react';
import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {useEffect} from 'react';
import {useContext} from 'react';
import {UserContext} from '../../Context/UserContext/userContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const UserContext = useContext(userContext);
  // const {loginUser} = UserContext;

  const {
    authContext: {logUserIn},
  } = useContext(UserContext);
  // useEffect(() => {
  //   if (AsyncStorage.getItem('token') != null) {
  //     navigation.navigate('Home');
  //   }
  // }, []);

  // const logUserIn = async (formData) => {
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     const res = await axios.post(
  //       'http://192.168.0.115:5000/api/auth',
  //       formData,
  //       config,
  //     );
  //     // console.log(res.data);
  //     console.log(res.data.token);
  //     await AsyncStorage.setItem('token', res.data.token + '');
  //     if ((await AsyncStorage.getItem('token')) != null) {
  //       navigation.navigate('Home');
  //     }
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   }
  // };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: 'bold',
            }}>
            Movie Store
          </Text>
        </View>
      </View>
      <View>
        <Text style={{marginLeft: 30, fontSize: 20, marginTop: 10}}>Login</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View
          style={{
            borderColor: '#808080',
            borderWidth: 0.5,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              console.log(email);
            }}
            style={{margin: 10, width: '100%'}}></TextInput>
        </View>
        <View
          style={{
            borderColor: '#808080',
            borderWidth: 0.5,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={{margin: 10, width: '100%'}}></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#7877fe',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          height: 36,
          margin: 30,
        }}
        onPress={() => {
          // loginUser({email, password});
          logUserIn({email, password});
        }}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={{marginLeft: 30, marginBottom: 20, color: '#7877fe'}}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Don't have an Account ?</Text>
          <Text> </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#7877fe',
                textDecorationLine: 'underline',
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Login;
