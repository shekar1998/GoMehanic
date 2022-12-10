import {Pressable, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/MaterialIcons';
import color from '../../../../color/color';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const bgcolor = color.theme;

const HomePageHeader = () => {
  const mobileWidth = 411.42857142857144;
  const mobileHeight = 864.7619047619048;

  const broderRadius = Math.round(mobileWidth + mobileHeight) / 2;
  const Hwidth = mobileWidth * 0.5;
  const Hheight = mobileWidth * 0.5;
  console.log('Border Radius = ', broderRadius);
  console.log('Width = ', Hwidth);
  console.log('Height = ', Hheight);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#396afc', bgcolor.buttonColor]}
      style={styles.parentElement}>
      <Box
        w={'100%'}
        flexDirection={'row'}
        style={styles.headerContainer}
        // justifyContent={'space-between'}
        alignContent={'center'}
        alignItems={'center'}
        >
        <View style={styles.IconContainer}>
          <View style={[styles.card]}>
            <Image
              style={styles.ImageContainer2}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/869/869161.png',
              }}
            />
          </View>
          <Box w={'75%'} justifyContent={'flex-start'}>
            <Box
              w={'86%'}
              flexDirection={'row'}
              justifyContent={'space-between'}>
              <Text
                fontSize="sm"
                fontFamily={'MPLUSRounded1c'}
                fontStyle="normal"
                color={bgcolor.darktextColor}
                fontWeight={600}>
                Manjunath S
              </Text>
              {/* <AntDesign
              style={{left: -10}}
              name="keyboard-arrow-down"
              size={25}
              color={'black'}
            /> */}
            </Box>
            <Box shadow={5} flexDirection={'row'} justifyContent={'flex-start'}>
              {/* <Image
              style={styles.ImageContainer2}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/3177/3177361.png',
              }}
            /> */}
              <Text
                fontSize="sm"
                fontFamily={'MPLUSRounded1c'}
                fontStyle="normal"
                color={bgcolor.darkSubText}
                fontWeight={300}>
                #183/1, Nagarbhavi
              </Text>
            </Box>
          </Box>
        </View>
        <Box style={[styles.card]}>
          <Image
            style={styles.ImageContainer}
            source={{
              uri: 'https://i.pinimg.com/originals/97/7e/57/977e57043787edecc39eeb55fee3d040.jpg',
            }}
          />
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  parentElement: {
    borderRadius: Math.round(width + height) / 2,
    height: width * 2.189,
    width: width * 2.189,
    alignContent: 'center',
    alignSelf: 'center',
    top: -(height * 0.5),
    justifyContent: 'flex-end',
  },
  card: {
    borderRadius: 60,
    width: 55,
    height: 55,
  },
  shadowProp: {
    // elevation: 9,
  },
  ImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    resizeMode: 'contain',
    // elevation:3
  },
  ImageContainer2: {
    top: 3.5,
    width: 35,
    height: 37,
  },
  linearGradient: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    width: 55,
    height: 55,
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 14,
    // backgroundColor: '#000',
    height: height / 8,
    top: -(height / 2.6),
    alignSelf: 'center',
  },
  IconContainer: {
    width: '55%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor:'red'
  },
});
