import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const Basic = () => {
    const [name, SetName] = useState('');
    const [age, SetAge] = useState('');
    const [pass, SetPass] = useState('');
    const [display, setDisplay] = useState(false);
    const [passv, SetPassv] = useState(true);
    const handle = () => {
      setDisplay(true);
    };
    const handleclear = () => {
      setDisplay(false);
      SetName('');
      SetAge('');
      SetPass('');
    };
    const handleshow = () => {
      SetPassv(false);
    };
  return (
  
    <View>
      <TextInput
        onChangeText={text => SetName(text)}
        style={styles.textbox}
        placeholder="enter your name"
        value={name}></TextInput>
      <TextInput
        onChangeText={text => SetAge(text)}
        style={styles.textbox}
        placeholder="enter your date"
        value={age}></TextInput>
      <TextInput
        secureTextEntry={passv}
        onChangeText={text => SetPass(text)}
        style={styles.textbox}
        placeholder="enter your  password"
        value={pass}></TextInput>
      <Button title="click" onPress={handle}></Button>
      <Button title="passwordshow" onPress={handleshow}></Button>
      {display ? (
        <View>
          <Text>Name:{name}</Text>
          <Text>Age:{age}</Text>
          <Text>Pass:{pass}</Text>
        </View>
      ) : null}
      <Button title="clear" onPress={handleclear}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    textbox: {fontSize: 18, borderColor: 'red', borderWidth: 2},
  });
export default Basic