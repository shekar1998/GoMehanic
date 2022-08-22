import {StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';
import HomePageHeader from '../../component/header/HomePageHeader';
import BrandFlatList from '../../component/flatList/BrandFlatlist';
import LinearGradient from 'react-native-linear-gradient';
import CustomCarousel from './CustomCarousel';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import UserCar from '../../component/userCar/UserCar';
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomeScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <Box flex={1} width={'100%'}>
      <LinearGradient
        start={{x: 0.7, y: 1}}
        end={{x: 0, y: 1}}
        colors={[ '#fff', '#effcfff5' ]}
        style={styles.linearGradient}>
        <HomePageHeader />
        <CustomCarousel />
        <Box w={'100%'}>
          <BrandFlatList />
          <UserCar />
        </Box>
        
      </LinearGradient>
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
  text:{
    color:'#000',
    padding:30,
    fontFamily:'NanumBrushScript'
  }
});
