import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Movies = (props) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
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
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Trending Movies</Text>
      </View>
      <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Details');
          }}
          style={{margin: 10, borderRadius: 10, borderWidth: 1, padding: 10}}>
          <View
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/favicon.png')}
              style={{height: 40, width: 40}}></Image>
            <View style={{right: 0, position: 'absolute'}}>
              <Text
                style={{
                  fontSize: 14,
                }}>
                Rating : 4.2/5
              </Text>
              <Text
                style={{
                  fontSize: 14,
                }}>
                Category
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Title of the Movie
            </Text>
            <Text style={{fontSize: 14}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae dolore vel officia tenetur alias illum
              autem voluptatum, optio magni qui hic, odit culpa aliquid libero
              enim odio laudantium temporibus, repellendus distinctio ab
              voluptate? Omnis accusamus aspernatur veniam minima rem qui.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Movies;
