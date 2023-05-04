import React, { useState } from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Login = (props) => {
  const [name,setName]=useState("");
  
  const age =25;
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:"center",marginBottom:20}}>Login page</Text>

      <TextInput onChangeText={(text)=>setName(text)} placeholder='enter your name'/>
      <Button title='Login' onPress={()=>props.navigation.navigate('Home',{name:name,age:age})}></Button>
    </View>
  );
};

export default Login;
