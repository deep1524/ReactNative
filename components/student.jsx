import React, {Component} from 'react';
import { Text, View} from 'react-native';

class Students extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30,color:"green"}}>Students Name:{this.props.name}</Text>
       
      </View>
    );
  }
}

export default Students;
