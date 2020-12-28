import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/Components/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './src/Components/Signup/Signup';
import Home from './src/Components/Home/Home';
import Details from './src/Components/Details/Details';
import AdminLogin from './src/Components/AdminLogin/AdminLogin';
import AdminHome from './src/Components/AdminHome/AdminHome';
import ForgotPassword from './src/Components/ForgotPassword/ForgotPassword';
import OTPVerify from './src/Components/OTPVerify/OTPVerify';
import ChangePassword from './src/Components/ChangePassword/ChangePassword';
import {UserContext} from './src/Context/UserContext/userContext';
import LoginStack from './src/LoginStack';
import axios from 'axios';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useReducer} from 'react';
import {
  AUTH_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from './src/Context/types';
import {useMemo} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {navigationRef} from './src/Components/navigationRef';
import Dashboard from './src/Components/Dashboard/Dashboard';
import Movies from './src/Components/Movies/Movies';
import WebSeries from './src/Components/WebSeries/WebSeries';
import Logout from './src/Components/Logout/Logout';
import AdminAddProduct from './src/Components/AdminAddProduct/AdminAddProduct';
import AdminEditProduct from './src/Components/AdminEditProduct/AdminEditProduct';

const Stack = createStackNavigator();

export default function App({navigation}) {
  const Drawer = createDrawerNavigator();

  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };

        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
          AsyncStorage.setItem('token', action.payload);

          return {
            ...prevState,
            userToken: action.payload,
            isAuthenticated: true,
          };
        case 'EMAIL_SENT':
          return {
            ...prevState,
            emailSent: action.payload,
          };
        case 'EMAIL_ERROR':
          return {
            ...prevState,
            emailSent: false,
          };
        case 'OTP_CONFIRM':
          return {
            ...prevState,
            otpConfirmed: true,
          };
        case 'OTP_ERROR':
          return {
            ...prevState,
            otpConfirmed: false,
          };
        case 'UPDATE_PASSWORD':
          return {
            ...prevState,
            passwordChanged: true,
          };
        case 'PASSWORD_ERROR':
          return {
            ...prevState,
            passwordChanged: false,
          };
        case 'MOVIE_DETAILS':
          return {
            ...prevState,
            movie: action.payload,
            movieLoaded: false,
          };
        case 'MOVIE_ERROR':
          return {
            ...prevState,
            movie: {},
            moovieLoaded: true,
          };
        case 'LOAD_USER':
          return {
            ...prevState,
            user: action.payload,
          };
        case 'ADD_PRODUCT':
          return {
            ...prevState,
          };
        case 'ADD_ERROR':
          return {
            ...prevState,
          };
        case 'UPDATE_PRODUCT':
          return {
            ...prevState,
          };
        case 'LOGOUT':
        case 'AUTH_FAIL':
          AsyncStorage.removeItem('token');
          return {
            ...prevState,
            userToken: null,
            isAuthenticated: false,
          };
        default:
          return prevState;
      }
    },
    {
      userToken: null,
      user: {},
      isAuthenticated: null,
      isLoading: true,
      error: null,
      emailSent: false,
      otpConfirmed: false,
      passwordChanged: false,
      email: null,
      movie: {},
      movieLoaded: true,
    },
  );

  useEffect(() => {
    setLoading(true);
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('token');
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      } catch (error) {
        dispatch({type: 'LOAD_ERROR'});
      }
      setLoading(false);
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      logUserIn: async (formData) => {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const res = await axios.post(
            'https://movie-store-node.herokuapp.com/api/auth',
            formData,
            config,
          );
          await AsyncStorage.setItem('token', res.data.token);
          console.log('TOKEN', res.data.token);
          dispatch({type: 'LOGIN_SUCCESS', payload: res.data.token});

          const res2 = await axios.get(
            'https://movie-store-node.herokuapp.com/api/auth',
            {
              headers: {
                token: await AsyncStorage.getItem('token'),
              },
            },
          );
          dispatch({type: 'LOAD_USER', payload: res2.data});
        } catch (error) {
          dispatch({type: LOGIN_SUCCESS, payload: res.data});
        }
      },

      registerUser: async (formData) => {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const res = await axios.post(
            'https://movie-store-node.herokuapp.com/api/user',
            formData,
            config,
          );
          dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
        } catch (error) {
          dispatch({type: LOGIN_SUCCESS, payload: res.data});
        }
      },
      signOut: () => {
        console.log('SIGNOOUT FUNCTION IS CALLED');
        dispatch({type: 'LOGOUT'});
      },
      sendOTPMail: async (formData) => {
        console.log('SEND OTP MAIL FUN()');
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const res = await axios.post(
            'https://movie-store-node.herokuapp.com/api/user/sendOTP',
            formData,
            config,
          );
          console.log(res.data);
          dispatch({type: 'EMAIL_SENT', payload: true});
          state.email = formData.email;
          console.log('formdata', formData.email);
          console.log('Email', state.email);
        } catch (error) {
          dispatch({type: 'EMAIL_ERROR', payload: error.message});
          console.log(error.message);
        }
      },
      verifyOTP: async (formData) => {
        console.log('OTP VERIF FUN()');
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const res = await axios.post(
            'https://movie-store-node.herokuapp.com/api/user/confirmOTP',
            formData,
            config,
          );
          console.log(res.data);
          dispatch({type: 'OTP_CONFIRM', payload: true});
        } catch (error) {
          dispatch({type: 'OTP_ERROR', payload: false});
          console.log(error.message);
        }
      },
      updatePassword: async ({password}) => {
        let email;
        email = state.email;
        console.log('Updated Password', email);
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const res = await axios.put(
            'https://movie-store-node.herokuapp.com/api/user/updatePassword',
            {email, password},
            config,
          );
          console.log(res.data);
          dispatch({type: 'UPDATE_PASSWORD', payload: true});
        } catch (error) {
          dispatch({type: 'PASSWORD_ERROR', payload: false});
          console.log(error.message);
        }
      },
      getMovieByID: async (id) => {
        console.log('DELETE FUN');
        const config = {
          headers: {
            token: await AsyncStorage.getItem('token'),
          },
        };
        try {
          const res = await axios.get(
            'https://movie-store-node.herokuapp.com/api/movies/' + id,
            config,
          );
          dispatch({type: 'MOVIE_DETAILS', payload: res.data});
        } catch (error) {
          dispatch({type: 'MOVIE_ERROR'});
        }
      },
      addMovies: async (formData) => {
        console.log('ADD MOVIES FUN');
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        };
        try {
          const res = await axios.post(
            'https://movie-store-node.herokuapp.com/api/movies',
            formData,
            config,
          );
          dispatch({type: 'ADD_PRODUCT'});
          console.log(res.data);
        } catch (error) {
          console.log(error);
          dispatch({type: 'ADD_ERROR'});
          console.log(error.message);
        }
      },
      updateMovie: async (formData, id) => {
        console.log('Update MOVIES FUN');
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        };
        try {
          const res = await axios.put(
            'https://movie-store-node.herokuapp.com/api/movies/' + id,
            formData,
            config,
          );
          dispatch({type: 'ADD_PRODUCT'});
          console.log(res.data);
        } catch (error) {
          console.log(error);
          dispatch({type: 'ADD_ERROR'});
          console.log(error.message);
        }
      },
      deleteMovieByID: async (id) => {
        const config = {
          headers: {
            token: await AsyncStorage.getItem('token'),
          },
        };
        console.log('DELETE FUN', id);
        try {
          const res = await axios.delete(
            'https://movie-store-node.herokuapp.com/api/movies/' + id,
            config,
          );
          dispatch({type: 'ADD_PRODUCT'});
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    [navigation],
  );

  return (
    <UserContext.Provider value={{authContext, state}}>
      <NavigationContainer ref={navigationRef}>
        {state.userToken == null ? (
          <LoginStack />
        ) : state.user.isAdmin ? (
          <Stack.Navigator>
            <Stack.Screen
              name="AdminHome"
              component={AdminHome}
              options={{headerShown: false}}
            />

            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="AddProduct" component={AdminAddProduct} />

            <Stack.Screen name="Edit Product" component={AdminEditProduct} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
