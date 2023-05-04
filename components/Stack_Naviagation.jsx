import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './Page/Home';
import Login from './Page/Login';
const Stack= createNativeStackNavigator();

const Stack_Naviagation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          
        </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default Stack_Naviagation;
