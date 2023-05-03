import React, { useState } from 'react';
import {Button, StyleSheet, Text, View,Modal} from 'react-native';

const Modal_open = () => {
    const [showmodal,setShowmodal]=useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showmodal} animationType='slide'>
        <View style={styles.centerview}>
          <View style={styles.modelview}>
            <Text style={{fontSize:30,marginBottom:20}}>Hello code step by step </Text>
            <Button title='close' onPress={()=>setShowmodal(false)}/>
          </View>
        </View>
      </Modal>

      <View style={styles.btn}>
        <Button title="open modal" onPress={()=>setShowmodal(true)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerview:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  modelview:{
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    shadowColor:"black",
    elevation:5
  }
});

export default Modal_open;
