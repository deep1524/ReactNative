import React from 'react';
import {FlatList,  Text, View} from 'react-native';
import UserData from './UserData';
const user = [
  {
    id: 1,
    name: 'DEEP Yadav',
    email: 'deep@gmail.com',
  },
  {
    id: 2,
    name: 'DK',
    email: 'deep45@gmail.com',
  },
  {
    id: 3,
    name: 'ANil',
    email: 'deep78@gmail.com',
  },
  {
    id: 4,
    name: 'uday',
    email: 'deep96@gmail.com',
  },
];
const Componentswithfaltlist = () => {
  return (
    <View>
      <Text>Componets in loop with flatlist</Text>
      <FlatList data={user} renderItem={({item}) => (<UserData item={item} />)} />
    </View>
  );
};



export default Componentswithfaltlist;
