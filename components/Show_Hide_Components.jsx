import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Show_Hide_Components = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text>ShoW HIDE COMPONENTS</Text>
      <Button title="Toggle Components" onPress={() => setShow(!show)}></Button>
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User components</Text>
    </View>
  );
};

export default Show_Hide_Components;
