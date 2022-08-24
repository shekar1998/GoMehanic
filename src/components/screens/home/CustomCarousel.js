// @ts-nocheck
import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Slider() {
  return (
    <View style={styles.container}>
      <Swiper
        height={300}
        horizontal={true}
        autoplay
        autoplayTimeout={6}
        activeDot={<View style={{backgroundColor:'blue', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        paginationStyle={{
          marginBottom: 10,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/Carousel/Slide1.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/Carousel/Slide2.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/Carousel/Slide3.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/Carousel/Slide4.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/Carousel/Slide5.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 250,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  slide: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
