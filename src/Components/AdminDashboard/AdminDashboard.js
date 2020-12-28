import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const AdminDashboard = (props) => {
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>
        Welcome Admin
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignContent: 'space-around',
        }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AddProduct');
            }}
            style={{
              backgroundColor: '#DCDCDC',
              height: 112,
              padding: 10,
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/clapperboard.png')}
                style={{height: 56, width: 56}}></Image>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>
                  Add a Movie
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DCDCDC',
              height: 112,
              padding: 10,
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/edit.png')}
                style={{height: 56, width: 56}}></Image>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>
                  Edit a Movie
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DCDCDC',
              height: 112,
              padding: 10,
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/delete.png')}
                style={{height: 56, width: 56}}></Image>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>
                  Delete a Movie
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AdminDashboard;
