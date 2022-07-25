import {Pressable, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import color from '../../color/color';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomePageHeader = () => {
  return (
    <Box width={width} py={4} px={3}>
      <Box style={styles.parentElement}>
        <View style={[styles.card, styles.shadowProp]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#edf3f5', '#e6eaeb']}
            style={styles.linearGradient}>
            <View>
              <Entypo name="location-pin" size={28} color={'black'} />
            </View>
          </LinearGradient>
        </View>
        <Box
          shadow={5}
          w={'70%'}
          justifyContent={'space-between'}
          paddingBottom={2}>
          <Text fontSize="sm" color={'grey'} fontWeight={'thin'}>
            Your Location
          </Text>
          <Text fontSize="md" fontWeight={'medium'}>
            Bangalore, Karnataka
          </Text>
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
    </Box>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
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
  },
   linearGradient: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
  },
});
