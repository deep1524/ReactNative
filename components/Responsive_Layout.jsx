import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Responsive_Layout = () => {
  return (
    <View style={style.main}>
      <View style={style.box1}>
        <View style={style.box1in1}></View>
        <View style={style.box1in2}></View>
        <View style={style.box1in3}></View>
      </View>
      <View style={style.box2}></View>
      <View style={style.box3}></View>
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection:"row"
  },
  box1: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection:"row"
  },
  box2: {
    backgroundColor: 'red',
    flex: 1,
  },
  box3: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  box1in1:{
    backgroundColor: 'grey',
    flex: 1,
    margin:5
  },
  box1in2:{
    backgroundColor: 'pink',
    flex: 1,
    margin:5
  },
  box1in3:{
    backgroundColor: 'purple',
    flex: 1,
    margin:5
  }
});

export default Responsive_Layout;
