import {Pressable, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import color from '../../color/color';
import LinearGradient from 'react-native-linear-gradient';
import GradientHeader from 'react-native-gradient-header';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomePageHeader = () => {
  return (
    <Box style={styles.parentElement}>
      <View style={[styles.card]}>
        <View style={styles.linearGradient}>
          <Entypo name="location-pin" size={28} color={'black'} />
        </View>
      </View>
      <Box
        shadow={5}
        w={'70%'}
        justifyContent={'space-between'}
        paddingBottom={2}>
        <Text
          fontSize="md"
          fontFamily={'MPLUSRounded1c'}
          fontStyle="normal"
          fontWeight={600}>
          Address
        </Text>
        <Box
          shadow={5}
          w={'70%'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          paddingBottom={2}>
          <Text
            fontSize="sm"
            color={'grey'}
            fontFamily={'MPLUSRounded1c'}
            fontStyle="normal"
            fontWeight={500}>
            #183/1, Nagarbhavi
          </Text>
          <AntDesign style={{top:3, left:-15}} name="downcircleo" size={18} color={'black'} />
        </Box>
      </Box>
      <Box w={'12%'}>
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
    marginTop: 8,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.4,
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
    borderRadius: 20,
  },
  linearGradient: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
  },
  mainContainer: {
    height: 155,
  },
});
