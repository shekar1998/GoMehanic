import {FlatList, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  ScrollView,
  Text,
} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';
import LinearGradient from 'react-native-linear-gradient';
import {useRef} from 'react';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

let brandImage = [
  {
    id: '1',
    name: 'Volkswagen',
    image:
      'https://www.freepnglogos.com/uploads/volkswagen-car-logo-png-brand-image-0.png',
  },
  {
    id: '12',
    name: 'Nissan',
    image:
      'https://www.freepnglogos.com/uploads/nissan-car-logo-png-brand-image-24.png',
  },
  {
    id: '13',
    name: 'Ford',
    image:
      'https://www.freepnglogos.com/uploads/ford-cars-logo-brands-png-images-15.png',
  },
  {
    id: '14',
    name: 'BMW',
    image:
      'https://www.freepnglogos.com/uploads/bmw-car-logo-png-brand-image-2.png',
  },
  {
    id: '15',
    name: 'Kia',
    image:
      'https://www.freepnglogos.com/uploads/kia-car-logo-png-brand-image-33.png',
  },
  {
    id: '16',
    name: 'Fiat',
    image:
      'https://www.freepnglogos.com/uploads/fiat-logo-fiat-car-symbol-png-11.png',
  },
  {
    id: '17',
    name: 'Mercedes',
    image:
      'https://www.freepnglogos.com/uploads/mercedes-benz-car-logo-png-brand-image-1.png',
  },
  {
    id: '18',
    name: 'Cooper',
    image:
      'https://www.freepnglogos.com/uploads/mini-cooper-car-logo-brands-png-images-26.png',
  },
  {
    id: '19',
    name: 'Porche',
    image:
      'https://www.freepnglogos.com/uploads/cars-logo-brands-png-images-30.png',
  },
  {
    id: '10',
    name: 'Renault',
    image:
      'https://www.freepnglogos.com/uploads/renault-car-logo-png-transparent-image-9.png',
  },
  {
    id: '108',
    name: 'Volvo',
    image:
      'https://www.freepnglogos.com/uploads/volvo-car-logo-png-brand-image-20.png',
  },
];

const renderItem = (item, ref) => {
  return (
    <Box px={3}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2193b0', '#6dd5ed']}
        style={styles.linearGradient}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.ImageStyle}
            source={{
              uri: item.item.image,
            }}
          />
        </View>
      </LinearGradient>
      <Text fontSize="sm" style={{textAlign: 'center'}} fontWeight={'bold'}>
        {item.item.name}
      </Text>
    </Box>
  );
};

const BrandFlatList = () => {
  const ref = useRef(null);

  return (
    <Box top={-30} px={3}>
      <Text fontSize="lg" mx={5} my={3} fontWeight={'extrabold'}>
        TOP BRAND
      </Text>

      <FlatList
        horizontal={true}
        data={brandImage}
        renderItem={item => renderItem(item, ref)}
        keyExtractor={item => item.id}
      />
      <Video
        source={{
          uri: 'https://youtu.be/PMZy53PHbY0',
          headers: {
            Authorization: 'bearer some-token-value',
            'X-Custom-Header': 'some value',
          },
        }}
        ref={ref} // Store reference
        style={styles.backgroundVideo}
      />
    </Box>
  );
};

export default BrandFlatList;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageContainer: {
    width: '60%',
    height: '60%',
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 2,
  },
  linearGradient: {
    width: 75,
    height: 75,
    margin: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: -2, height: 2},
    shadowColor: '#757575',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 9,
  },
  FlatListShadow: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
    flex: 1,
  },
});
