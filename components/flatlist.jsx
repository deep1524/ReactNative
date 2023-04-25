import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
  
        <FlatList data={user} renderItem={({item})=><Text style={styles.textbox}>{item.name}</Text>}>
  
        </FlatList>
        <FlatList data={user} renderItem={({item})=><Text style={styles.textbox}>{item.id}</Text>}>
  
  </FlatList>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textbox: {fontSize: 18, borderColor: 'red', borderWidth: 2,margin:5,padding:5},
  });
export default User