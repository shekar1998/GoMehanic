import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';
import HomePageHeader from '../../component/header/HomePageHeader';
import BrandFlatList from '../../component/flatList/BrandFlatlist';
import LinearGradient from 'react-native-linear-gradient';
import CustomCarousel from './CustomCarousel';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomeScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <Box flex={1} width={'100%'} bg={bgcolor.background}>
      <HomePageHeader />
      <CustomCarousel />
      <Box w={'100%'}>
        <BrandFlatList />
      </Box>
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    flex: 1,
  },
});
