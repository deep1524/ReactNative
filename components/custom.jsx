// List with map function (custom)
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const user = [
  {
    id: 1,
    name: 'DEEP',
  },
  {
    id: 2,
    name: 'DEEP Yadav',
  },
  {
    id: 3,
    name: 'Pooja',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 4,
    name: 'Dk',
  },
  {
    id: 8,
    name: 'Dk',
  },
  {
    id: 8,
    name: 'Dk',
  },
  {
    id: 5,
    name: 'Dk Yadav',
  },
  {
    id: 6,
    name: 'Dk Yadav',
  },
  {
    id: 6,
    name: 'anil',
  },
];

const Custom = () => {
  return (
    <View>
      <ScrollView>
        {user.map(item => (
          <Text style={styles.textbox}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textbox: {
    fontSize: 18,
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
});

export default Custom;
