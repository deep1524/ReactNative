import React from 'react';
import {Button, Text, View} from 'react-native';

const Login = (props) => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:"center",marginBottom:20}}>Login page</Text>
      <Button title='Login' onPress={()=>props.navigation.navigate('Home')}></Button>
    </View>
  );
};

export default Login;
