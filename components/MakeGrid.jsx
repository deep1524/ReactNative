// Make Dynamic Grid

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MakeGrid = () => {
  return (
    <>
      <Text>MAke Dynamic Grid</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
        <Text style={styles.text}>deep </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    width: 50,
    height: 50,
    borderColor: 'red',
    borderWidth: 2,
    padding: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default MakeGrid;
