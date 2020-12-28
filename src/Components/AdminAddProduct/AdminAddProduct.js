import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import {Button, Image, PermissionsAndroid, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import {UserContext} from '../../Context/UserContext/userContext';

const AdminAddProduct = () => {
  const {
    authContext: {addMovies},
  } = useContext(UserContext);

  const [mName, setMName] = useState('');
  const [mImage, setMImage] = useState(
    'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
  );
  const [mType, setMType] = useState('');
  const [mDescription, setMDescription] = useState('');
  const [mTrailer, setMTrailer] = useState('');
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('');
  const [mLinks, setMLinks] = useState([]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');

  const [imageURI, setImageURI] = useState('');

  const pickImage = async (props) => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'MovieStore',
        message: 'MovieStore wants to access your Gallery ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.showImagePicker((response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          console.log(response);
          let newFile = {
            uri: response.uri,
            type: `test/${response.uri.split('.')[1]}`,
            name: `test.${response.uri.split('.')[1]}`,
          };
          setMImage(newFile.uri);
          setImageURI(newFile);
        }
      });
    } else {
      console.log('Permission not granted!');
    }
  };

  const submitData = () => {
    let links = [];
    links.push(link1);
    setMLinks(links);

    const formData = new FormData();
    formData.append('mName', mName);
    formData.append('image', imageURI);
    formData.append('mType', mType);
    formData.append('mDescription', mDescription);
    formData.append('mTrailer', mTrailer);
    formData.append('category', category);
    formData.append('rating', rating);
    formData.append('mLinks', mLinks);

    addMovies(formData);
  };
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: mImage}}
            style={{height: 200, width: 200, borderRadius: 200}}></Image>
        </View>
        <TouchableOpacity
          onPress={pickImage}
          style={{
            backgroundColor: '#7877fe',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            height: 36,
            margin: 30,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Pick Image
          </Text>
        </TouchableOpacity>
        <View>
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
              placeholder="Enter Title"
              value={mName}
              onChangeText={(text) => {
                setMName(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Description"
              value={mDescription}
              onChangeText={(text) => {
                setMDescription(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Movie or Webseries"
              value={mType}
              onChangeText={(text) => {
                setMType(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Trailer Link"
              value={mTrailer}
              onChangeText={(text) => {
                setMTrailer(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Link 1"
              value={link1}
              onChangeText={(text) => {
                setLink1(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Link 2"
              value={link2}
              onChangeText={(text) => {
                setLink2(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Category"
              value={category}
              onChangeText={(text) => {
                setCategory(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
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
              placeholder="Enter Rating"
              value={rating}
              onChangeText={(text) => {
                setRating(text);
              }}
              style={{margin: 10, width: '100%'}}></TextInput>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => submitData()}
          style={{
            backgroundColor: '#7877fe',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            height: 36,
            margin: 30,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AdminAddProduct;
