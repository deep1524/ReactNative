import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Unmount = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text>use Effect Unmount</Text>
      <Button title="Toggle " onPress={() => setShow(!show)}></Button>
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
    // this is the example for unmounting
    let timer = setInterval(() => {
        console.warn('timer called');
      }, 2000);
  useEffect(() => {
    // it will works for mounting
    // console.warn('vm');
    // it will works for Unmounting

   
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User components</Text>
    </View>
  );
};

export default Unmount;
