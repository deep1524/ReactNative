import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Api_call = () => {
    const [data,setData]=useState(undefined);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const response = await res.json();
    setData(response);
    // console.warn(response);
  };
console.warn(data)
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>Api_call</Text>
      {
        data ? <View>
            <Text>{data.userId}</Text>
            <Text>{data.id}</Text>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
        </View>:null
      }
    </View>
  );
};

export default Api_call;
