import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../Context/UserContext/userContext';

const ForgotPassword = ({navigation}) => {
  const {
    authContext: {sendOTPMail},
    state: {emailSent},
  } = useContext(UserContext);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (emailSent) {
      navigation.navigate('OTPVerify');
    }
  }, [emailSent]);
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
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
            Enter your Email ID
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
              placeholder="Enter your Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              sendOTPMail({email});
            }}
            style={{
              backgroundColor: '#7877fe',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              height: 36,
              margin: 30,
            }}>
            <Text style={{color: '#fff'}}>Send Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
