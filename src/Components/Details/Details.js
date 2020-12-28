import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {Image, Linking, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../Context/UserContext/userContext';

const Details = () => {
  const {
    authContext: {getMovieByID},
    state: {movie, movieLoaded},
  } = useContext(UserContext);

  const [image, setImage] = useState(
    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  );
  useEffect(() => {
    getMovieByID(movie._id);
    // setImage(`data:image/jpeg;base64,${movie.mImage}`);
  }, [movieLoaded]);

  const bufferToBase = () => {
    let imageBuffer = Buffer.from(JSON.stringify(movie.mImage));
    let image64 = imageBuffer.toString('base64');
    return image64;
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
      <FastImage
        source={{
          uri: 'data:image/png;base64,' + movie.mImage,
          priority: FastImage.priority.normal,
        }}
        style={{
          height: 300,
          width: 300,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          left: '15%',
        }}></FastImage>
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 24, margin: 10}}>
          {movie.mName}
        </Text>
        <Text style={{margin: 10}}>Category</Text>
        <Text style={{margin: 10}}>{movie.mDescription}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=_8aS85JnZKo');
          }}
          style={{margin: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: '#7877fe',
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Official Trailer
          </Text>
        </TouchableOpacity>
        <Text style={{margin: 10}}>Rating 4.2/5</Text>
        <Text style={{fontWeight: 'bold', fontSize: 24, margin: 10}}>
          Links to Download
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(movie.mTrailer);
          }}
          style={{margin: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: '#7877fe',
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Link
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;
