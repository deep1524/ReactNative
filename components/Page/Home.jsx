import React from 'react';
import {Text, View} from 'react-native';

const Home = (props) => {
  console.warn(props.route.params)
  // this is destruturing 
  const {name,age}=props.route.params;
  return (
    <View>
      <Text>Home</Text>
      <Text style={{fontSize:20,textAlign:"center"}}>Name:-{props.route.params.name}</Text>
      <Text style={{fontSize:20,textAlign:"center"}}>Age:-{props.route.params.age}</Text>
      <Text style={{fontSize:20,textAlign:"center"}}>Name:-{name}</Text>
      <Text style={{fontSize:20,textAlign:"center"}}>Age:-{age}</Text>
    </View>
  );
};

export default Home;
