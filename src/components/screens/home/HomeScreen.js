import {StyleSheet, View, ScrollView, TextInput} from 'react-native';
import * as React from 'react';
import {Box, Text, Input, Icon} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../../../color/color';
import HomePageHeader from '../../common/header/HomePageHeader';
import BrandFlatList from '../../common/flatList/BrandFlatlist';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomCarousel from './CustomCarousel';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import UserCar from '../../common/userCar/UserCar';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {Rating} from 'react-native-ratings';

const {width, height} = Dimensions.get('window');
const bgcolor = color.theme;

const HomeScreen = () => {
  const [ChangeNumber, setChangeNumber] = React.useState('');
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  const onChangeNumber = () => {};

  return (
    <ScrollView>
      <Box flex={1}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <HomePageHeader />
        <Box w={'100%'} h={height} style={styles.subContainer}>
          {/* <Box px={4}>
            <Text
              fontSize="sm"
              fontFamily={'MPLUSRounded1c'}
              fontStyle="normal"
              color={bgcolor.greyColor}
              fontWeight={600}>
              Manjunath S
            </Text>
            <Text
              fontSize="xl"
              fontFamily={'MPLUSRounded1c'}
              fontStyle="normal"
              color={bgcolor.textColor}
              fontWeight={600}>
              DRIVE IN, GET WASH, BE HAPPY!
            </Text>
          </Box> */}
          <Input
            w={{
              base: '92%',
              md: '25%',
            }}
            h={{
              base: '7%',
              md: '25%',
            }}
            color={'black'}
            fontSize={12}
            borderRadius={10}
            borderWidth={0}
            alignSelf={'center'}
            margin={3}
            backgroundColor={'rgb(236, 236, 236)'}
            // style={styles.searchBox}
            InputRightElement={
              <Icon
                style={{marginRight: 5}}
                as={<MaterialIcons name="search" />}
                size={8}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Name"
          />
          {/* <TextInput
            style={styles.searchBox}
            onChangeText={onChangeNumber}
            value={ChangeNumber}
            placeholder="useless placeholder"
            keyboardType="numeric"
          /> */}
          <CustomCarousel />
          {/* <BrandFlatList />
          <UserCar /> */}
        </Box>
      </Box>
    </ScrollView>
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
  text: {
    color: '#000',
    padding: 30,
    fontFamily: 'NanumBrushScript',
  },
  subContainer: {
    top: -(height * 0.93),
    elevation: 15,
    paddingTop: 15,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: 'pink',
  },
  searchBox: {
    backgroundColor: 'rgb(236, 236, 236)',
  },
});
