import React, { useRef } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Use_Ref = () => {
    const input=useRef();

    const updateInput=()=>{
      
        input.current.focus();
        input.current.setNativeProps({
            fontSize:24,
            color:"red"
        })
    }

  return (
    <View style={styles.container}>
      <Text>use_Ref</Text>
      <TextInput ref={input} placeholder="Enter name" style={styles.input} />
      <TextInput placeholder="Enter Password " style={styles.input} />
      <Button title="UpdateInput" onPress={updateInput}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 15,
  },
});

export default Use_Ref;
