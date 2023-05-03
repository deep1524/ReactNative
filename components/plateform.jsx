import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Plate_form = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Platform:-{Platform.OS}</Text>
      {
        Platform.OS==="android" ? <View style={{backgroundColor:"red", height:300 ,width:300}}></View> :<View style={{backgroundColor:"red", height:300 ,width:300}}></View>
      }
      <Text style={styles.text}>Hello</Text>
      <Text>{JSON.stringify(Platform)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    text:{
        color:Platform.OS==="android" ? "orange" : "red",
        fontSize:30
    }
  });

export default Plate_form;
