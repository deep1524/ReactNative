import React, { useState } from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';

const Status_Bar = () => {
    const [hide,setHide]=useState(false);
    const [Barstyle,setBarstyle]=useState("default");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} barStyle={Barstyle} 
      // hidden the status bar
      hidden={hide}
      />
      <Button title='toggle' onPress={()=>setHide(!hide)}/>
      <Button title='Update Style' onPress={()=>setBarstyle("dark-content")}/>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:"center"
    }
})

export default Status_Bar;
