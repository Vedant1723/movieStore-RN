import React from 'react';
import {
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
import {useContext} from 'react';
import {UserContext} from '../../Context/UserContext/userContext';
import {useState} from 'react';
import {useEffect} from 'react';

const OTPVerify = ({navigation}) => {
  const {
    authContext: {verifyOTP},
    state: {otpConfirmed},
  } = useContext(UserContext);

  const [otp, setOTP] = useState('');
  useEffect(() => {
    if (otpConfirmed) {
      navigation.navigate('ChangePassword');
    }
  }, [otpConfirmed]);

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
      <View style={{margin: 10}}>
        <Text style={{marginLeft: 30, fontSize: 20, marginTop: 10}}>
          Enter the OTP You Got in your mail
        </Text>
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
            placeholder="OTP"
            value={otp}
            onChangeText={(text) => {
              setOTP(text);
            }}
            style={{margin: 10, width: '100%'}}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            verifyOTP({otp});
          }}
          style={{
            backgroundColor: '#7877fe',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            height: 36,
            margin: 30,
          }}>
          <Text style={{color: '#fff'}}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPVerify;
