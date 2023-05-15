import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// async storage implementation very important
const Async_Storage = () => {
  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('Name', 'DEEP YADAV');
  };
  const GETData = async () => {
    const name = await AsyncStorage.getItem('Name');
    setUser(name);
  };
  const RemoveData = async () => {
    await AsyncStorage.removeItem('Name');
    setUser('');
  };
  return (
    <View>
      <Text>Async_Storage</Text>
      <Text>{user}</Text>
      <Button title="setdata" onPress={setData} />
      <Button title="GETdata" onPress={GETData} />
      <Button title="Remove Data" onPress={RemoveData} />
    </View>
  );
};

export default Async_Storage;
