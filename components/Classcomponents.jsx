import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Students from './student';

class Classcomponents extends Component {
    constructor(){
        super();
        this.state={
            name:"DEEP",
            age:25
            
        }


    }
    updateName(text){
        this.setState({name:text});
    }
    fruit=()=>{
        console.warn("Apple");
    }
  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TextInput placeholder="enter your name" onChangeText={(text)=>this.updateName(text)}/>
        <Button title="click" onPress={this.fruit}></Button>
        <Students name={this.state.name}/>
      </View>
    );
  }
}

export default Classcomponents;
