import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Avatar, Box, Button, Center, Container, Text} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/EvilIcons';
import color from '../../color/color';

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const HomePageHeader = () => {
  return (
    <Box width={width} flex={1} py={4} px={3} bg={bgcolor.background}>
      <Box style={styles.parentElement}>
        <Box w={'12%'}>
          <Center
            shadow={9}
            bg="rgb(242, 243, 244)"
            _text={{
              color: 'white',
              fontWeight: 'bold',
            }}
            borderRadius={40}
            height={16}
            width={16}>
            <Entypo name="location" size={34} color={'black'} />
          </Center>
        </Box>
        <Box
          shadow={5}
          w={'50%'}
          justifyContent={'space-between'}
          paddingBottom={2}>
          <Text fontSize="sm" color={'grey'} fontWeight={'thin'}>
            Your Location
          </Text>
          <Text fontSize="md" fontWeight={'medium'}>
            Bangalore, Karnataka
          </Text>
        </Box>
        <Box w={'20%'}>
          <Avatar
            size="lg"
            bg="green.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
    backgroundColor: bgcolor.background,
  },
});
