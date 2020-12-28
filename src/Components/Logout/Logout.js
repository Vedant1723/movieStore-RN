import React from 'react';
import {Alert, View} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import {useContext} from 'react';
import {UserContext} from '../../Context/UserContext/userContext';

const Logout = (props) => {
  const {authContext} = useContext(UserContext);
  const {signOut} = authContext;
  const logUserOut = () => {
    Alert.alert(
      '',
      'Are you sure you want to Logout',
      [
        {
          text: 'Yes',
          onPress: () => {
            signOut();
            props.navigation.closeDrawer();
          },
        },
        {
          text: 'No',
          onPress: () => props.navigation.closeDrawer(),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem label="Logout" onPress={() => logUserOut()} />
    </DrawerContentScrollView>
  );
};

export default Logout;
