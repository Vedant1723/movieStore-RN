import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../Dashboard/Dashboard';
import Movies from '../Movies/Movies';
import WebSeries from '../WebSeries/WebSeries';

import Logout from '../Logout/Logout';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminMovies from '../AdminMovies/AdminMovies';
const AdminHome = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={(props) => <Logout {...props} />}>
      <Drawer.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{headerShown: true, headerTitle: 'Home'}}
      />
      <Drawer.Screen
        name="Admin Movies"
        component={AdminMovies}
        options={{headerShown: true, headerTitle: 'Admin Movies'}}
      />
      <Drawer.Screen
        name="WebSeries"
        component={WebSeries}
        options={{headerShown: true, headerTitle: 'WebSeries'}}
      />
    </Drawer.Navigator>
  );
};

export default AdminHome;
