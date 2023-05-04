import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

const List_with_Api_call = () => {
    const [data,setData]=useState([]);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await res.json();
    setData(response);
    // console.warn(response);
  };
console.warn(data)
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView>
      <Text>Api_call</Text>
    {
        data.length > 0 &&
        data.map((item,index)=>{
            return(
                <View key={index} style={{padding:20,borderBottomColor:"black",borderWidth:2,marginTop:5}}>
                    <Text>Id:-{item.id}</Text>
                    <Text>Titile:-{item.title}</Text>
                    <Text>Body:-{item.body}</Text>
                </View>
            )
        })
    }
    </ScrollView>
  );
};

export default List_with_Api_call;
