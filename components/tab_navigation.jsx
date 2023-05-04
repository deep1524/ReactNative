import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
// this is used for  bottom tabs
// const Tab = createBottomTabNavigator();
// this is used for top tabs
const Tab =createMaterialTopTabNavigator();
const Tab_navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
    </View>
  );
};
const Signup = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Sign UP</Text>
  </View>
  )
};
export default Tab_navigation;
