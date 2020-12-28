import React from 'react';
import {useContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../Context/UserContext/userContext';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');

  const {
    authContext: {updatePassword},
    state: {passwordChanged},
  } = useContext(UserContext);

  useEffect(() => {
    if (passwordChanged) {
      navigation.navigate('Login');
      ToastAndroid.show('Password Updated', ToastAndroid.SHORT);
    }
  }, [passwordChanged]);
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
            Enter your new Password
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
              placeholder="Enter your New Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              updatePassword({password});
            }}
            style={{
              backgroundColor: '#7877fe',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              height: 36,
              margin: 30,
            }}>
            <Text style={{color: '#fff'}}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
