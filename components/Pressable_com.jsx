import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Pressable_com = () => {
  return (
    <View style={styles.main}>
      {/* <Text>Pressable_com</Text> */}
      <Pressable
        onPress={() => console.warn(' Normal onPress')}
        onLongPress={() => console.warn(' longpress event')}
        onPressIn={() => console.warn('  onPress In')}
        onPressOut={() => console.warn(' onPress Out')}>
        <Text style={styles.press_btn}>Press me</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  press_btn: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    shadowColor: 'black',
    elevation: 10,
  },
});
export default Pressable_com;
