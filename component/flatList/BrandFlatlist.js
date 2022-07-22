import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

let brandImage = [
  {
    name: 'Volkswagen',
    image:
      'https://www.freepnglogos.com/uploads/volkswagen-car-logo-png-brand-image-0.png',
  },
  {
    name: 'Nissan',
    image:
      'https://www.freepnglogos.com/uploads/nissan-car-logo-png-brand-image-24.png',
  },
  {
    name: 'Ford',
    image:
      'https://www.freepnglogos.com/uploads/ford-cars-logo-brands-png-images-15.png',
  },
  {
    name: 'BMW',
    image:
      'https://www.freepnglogos.com/uploads/bmw-car-logo-png-brand-image-2.png',
  },
  {
    name: 'Kia',
    image:
      'https://www.freepnglogos.com/uploads/kia-car-logo-png-brand-image-33.png',
  },
  {
    name: 'Fiat',
    image:
      'https://www.freepnglogos.com/uploads/fiat-logo-fiat-car-symbol-png-11.png',
  },
  {
    name: 'Mercedes',
    image:
      'https://www.freepnglogos.com/uploads/mercedes-benz-car-logo-png-brand-image-1.png',
  },
  {
    name: 'Cooper',
    image:
      'https://www.freepnglogos.com/uploads/mini-cooper-car-logo-brands-png-images-26.png',
  },
  {
    name: 'Porche',
    image:
      'https://www.freepnglogos.com/uploads/cars-logo-brands-png-images-30.png',
  },
  {
    name: 'Renault',
    image:
      'https://www.freepnglogos.com/uploads/renault-car-logo-png-transparent-image-9.png',
  },
  {
    name: 'Volvo',
    image:
      'https://www.freepnglogos.com/uploads/volvo-car-logo-png-brand-image-20.png',
  },
];

const BrandFlatList = () => {
  return (
    <Box width={width} flex={1} py={4} px={3} bg={bgcolor.background}>
      <Text fontSize="md" fontWeight={'medium'}>
        Bangalore, Karnataka
      </Text>
    </Box>
  );
};

export default BrandFlatList;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: bgcolor.background,
  },
});
