import {FlatList, StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Box, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../../color/color';


let brandImage = [
  {
    id: '1',
    name: 'Volkswagen',
    image: 'https://www.pngmart.com/files/22/Nissan-Juke-PNG-Photo.png',
  },
  {
    id: '12',
    name: 'Nissan',
    image: 'https://www.pngmart.com/files/22/Nissan-Juke-PNG-Photo.png',
  },
  {
    id: '13',
    name: 'Ford',
    image: 'https://www.pngmart.com/files/22/Mercedes-GLB-PNG-Clipart.png',
  },
  {
    id: '14',
    name: 'BMW',
    image:
      'https://www.pngmart.com/files/22/Rolls-Royce-Phantom-PNG-HD-Isolated.png',
  },
  {
    id: '15',
    name: 'Kia',
    image: 'https://www.pngmart.com/files/22/Audi-Q5-Transparent-PNG.png',
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
];

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const UserCar = () => {
  const renderItem = item => {
    return (
      <Box px={3} backgroundColor={'red'}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#f0faff', '#f0faff']}
          style={styles.linearGradient}>
          <Box flexDirection={'row'} style={styles.center}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.ImageStyle}
                source={{
                  uri: item.item.image,
                }}
              />
            </View>
            {/* <View style={styles.textContainer}>
              <Text
                fontFamily={'PalanquinDark'}
                fontStyle="normal"
                fontSize="lg"
                fontWeight={500}>
                Tesla Modal X
              </Text>
              <Text
                style={{color: 'grey', fontWeight: '500'}}
                fontFamily={'PalanquinDark'}
                fontStyle="normal"
                fontSize="lg">
                2018
              </Text>
            </View> */}
          </Box>
          <Box backgroundColor={'red'} width={width - 50}>
            <Button style={styles.button}>Book your appointment</Button>
            {/* <Image
              style={styles.offerImage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/6895/6895211.png',
              }}
            /> */}
          </Box>
        </LinearGradient>
      </Box>
    );
  };

  return (
    <Box style={styles.mainContainer}>
      <FlatList
        data={brandImage}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default UserCar;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  linearGradient: {
    width: width - 50,
    height: height / 6,
    marginTop: 30,
    borderRadius: 25,
    shadowOffset: {width: -2, height: 2},
    shadowColor: '#bdbdbd',
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  ImageContainer: {
    width: '80%',
    height: '100%',
    top: -15,
    left: -15,
    // backgroundColor:'red'
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // alignSelf: 'flex-end',
  },
  textContainer: {
    fontWeight: '500',
    left: -35,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#181818',
    elevation: 3,
    width: width / 2,
    top: -15,
    left: width - 256,
    borderBottomRightRadius: 25,
    // height:60,
    borderTopLeftRadius: 30,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  offerImage: {
    width: '10%',
    height: '10%',
    resizeMode: 'contain',
  },
});
