import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Json_server = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch('http://10.0.2.2:3000/users');
    const response = await res.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Json_server</Text>
      {data.length
        ? data.map((item) => (
          
            <View>
              
              <Text>{item.name}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default Json_server;
