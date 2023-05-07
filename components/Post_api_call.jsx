import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

const Post_api_call = () => {
  const [data, setData] = useState([]);

  const saveData = async () => {
    const formdata={
        name:"Pooja Yadav with love 2",
        age:26,
        email:"pooja@gmail.com",
        
      }
    const url = 'http://10.0.2.2:3000/users';

    let res = await fetch(url, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body:JSON.stringify(formdata)
    });
    res= await res.json();
   console.warn(res);
  };
  return (
    <View>
      <Text>Post_api_call</Text>
      <Button title="add" onPress={saveData}></Button>
    </View>
  );
};

export default Post_api_call;
