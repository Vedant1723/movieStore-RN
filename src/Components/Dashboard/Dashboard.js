import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../Context/UserContext/userContext';
import {useContext} from 'react';

const Dashboard = ({navigation}) => {
  const [moviesList, setMoviesList] = useState([]);
  const loadMovies = async () => {
    const config = {
      headers: {
        token: await AsyncStorage.getItem('token'),
      },
    };
    try {
      const res = await axios.get(
        'https://movie-store-node.herokuapp.com/api/movies',
        config,
      );

      setMoviesList(res.data);
    } catch (error) {
      console.log(error.message);
      setMoviesList([]);
    }
  };

  const {
    authContext: {getMovieByID},
    state: {movieLoaded},
  } = useContext(UserContext);
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // useEffect(() => {
  //   if (!movieLoaded) {
  //     navigation.navigate('Details');
  //   }
  // }, [movieLoaded]);
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          backgroundColor: '#DCDCDC',
          borderRadius: 10,
        }}>
        <Image
          source={require('../../../assets/search.png')}
          style={{
            tintColor: '#A9A9A9',
            height: 23,
            margin: 10,
            width: 24,
          }}></Image>
        <TextInput
          placeholder="Search"
          keyboardType="default"
          style={{width: '100%'}}></TextInput>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          margin: 20,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>
          Trending Movies & Webseries
        </Text>
      </View>
      <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
        {moviesList.length == 0 ? (
          <View>
            <Text>No Movies Bro Sorry</Text>
          </View>
        ) : (
          moviesList.map((movie, i) => (
            <TouchableOpacity
              onPress={() => {
                getMovieByID(movie._id);
                navigation.navigate('Details');
              }}
              style={{
                margin: 10,
                borderRadius: 10,
                borderWidth: 1,
                padding: 10,
              }}>
              <View
                style={{
                  margin: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./../../../assets/favicon.png')}
                  style={{height: 40, width: 40}}></Image>
                <View style={{right: 0, position: 'absolute'}}>
                  <Text
                    style={{
                      fontSize: 14,
                    }}>
                    Rating : {movie.rating}/5
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                    }}>
                    {movie.category}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  {movie.mName}
                </Text>
                <Text style={{fontSize: 14}}>{movie.mDescription}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
        <View style={{height: 200}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
