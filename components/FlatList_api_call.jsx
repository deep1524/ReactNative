import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

const FlatList_with_Api_call = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await res.json();
    setData(response);
    // console.warn(response);
  };
  console.warn(data);
  // flat list api call
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>FlatList with Api_call</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{padding:10,borderBottomColor:"black",borderWidth:2,marginBottom:5}}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default FlatList_with_Api_call;
