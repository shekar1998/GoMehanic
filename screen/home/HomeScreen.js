import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';
import HomePageHeader from '../../component/header/HomePageHeader';
import BrandFlatList from '../../component/flatList/BrandFlatlist';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomeScreen = () => {
  return (
    <Box flex={1} bg={bgcolor.background}>
     <HomePageHeader />
     <BrandFlatList />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: bgcolor.background,
  },
});
