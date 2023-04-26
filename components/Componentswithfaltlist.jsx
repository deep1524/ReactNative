import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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

const UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {flexDirection: 'row', borderWidth: 2, borderColor: 'black', margin: 4},
  item: {
    fontSize: 18,
    color: 'orange',
    flex: 1,
  },
});

export default Componentswithfaltlist;
