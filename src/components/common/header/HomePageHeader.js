import {Pressable, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import color from '../../../../color/color';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomePageHeader = () => {
  return (
    <Box style={styles.parentElement}>
      <View style={[styles.card]}>
        {/* <View style={styles.linearGradient}>  */}
        <Image
          style={styles.ImageContainer2}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/7721/7721875.png',
          }}
        />
      </View>
      {/* </View>  */}
      <Box
        shadow={5}
        w={'70%'}
        justifyContent={'flex-end'}
        paddingBottom={2}>
        <Box
          shadow={5}
          w={'32%'}
          flexDirection={'row'}
          justifyContent={'space-between'}>
          <Text
            fontSize="sm"
            fontFamily={'MPLUSRounded1c'}
            fontStyle="normal"
            fontWeight={600}>
            Home
          </Text>
          <AntDesign
            style={{top: 5, left: -15}}
            name="down"
            size={16}
            color={'black'}
          />
        </Box>
        <Text
          fontSize="sm"
          color={'grey'}
          fontFamily={'MPLUSRounded1c'}
          fontStyle="normal"
          fontWeight={500}>
          #183/1, Nagarbhavi
        </Text>
      </Box>
      <Box style={[styles.card]}>
        <Image
          style={styles.ImageContainer}
          source={{
            uri: 'https://i.pinimg.com/originals/97/7e/57/977e57043787edecc39eeb55fee3d040.jpg',
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginHorizontal: 2,
  },
  card: {
    backgroundColor: 'red',
    borderRadius: 70,
    width: 45,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    // shadowOffset: {width: -4, height: 4},
    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    elevation: 9,
  },
  ImageContainer: {
    width: 55,
    height: 55,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  ImageContainer2: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },
  linearGradient: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    width: 55,
    height: 55,
  },
});
