import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Students from './student';

class Classcomponents extends Component {
    fruit=()=>{
        console.warn("Apple");
    }
  render() {
    return (
      <View>
        <Text>Class Components</Text>
        <Button title="click" onPress={this.fruit}></Button>
        <Students/>
      </View>
    );
  }
}

export default Classcomponents;
