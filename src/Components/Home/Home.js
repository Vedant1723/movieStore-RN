import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../Dashboard/Dashboard';
import Movies from '../Movies/Movies';
import WebSeries from '../WebSeries/WebSeries';

import Logout from '../Logout/Logout';
const Home = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={(props) => <Logout {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true, headerTitle: 'Home'}}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{headerShown: true, headerTitle: 'Movies'}}
      />
      <Drawer.Screen
        name="WebSeries"
        component={WebSeries}
        options={{headerShown: true, headerTitle: 'WebSeries'}}
      />
    </Drawer.Navigator>
  );
};

export default Home;
