import React from 'react'
import { FlatList, Text, View } from 'react-native';

const user = [
    {
      id: 1,
      name: 'DEEP',
    },
    {
      id: 2,
      name: 'DEEP',
    },
    {
      id: 3,
      name: 'DEEP',
    },
    {
      id: 4,
      name: 'DEEP',
    },
  ];
function User() {
    return (
      <View>
        <Text>list</Text>
  
        <FlatList data={user} renderItem={({item})=><Text>{item.name}</Text>}>
  
        </FlatList>
        <FlatList data={user} renderItem={({item})=><Text>{item.id}</Text>}>
  
  </FlatList>
      </View>
    );
  }

export default User