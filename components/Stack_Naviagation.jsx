import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Page/Home';
import Login from './Page/Login';
import Search from './Page/Search';
const Stack = createNativeStackNavigator();

const Stack_Naviagation = () => {
  const leftbtnaction=()=>{
   console.warn("left btn action")
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        // this is for all the stack navigation
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: 'green',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft:()=><Button title='Left' onPress={leftbtnaction}></Button>,
            headerRight:()=><Search/>,
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Naviagation;
