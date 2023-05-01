import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Radio_Button_Dynamic = () => {
    const Skill=[
        {id:1,name:"Java"},
        {id:2,name:"JavaScript"},
        {id:3,name:"HTML"},
        {id:4,name:"CSS"},
        {id:5,name:"EXPRESS"},

    ]
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      <Text>Radio Button</Text>
{/* Dynmic radio button */}

      {
        Skill.map((item,index)=>{
            return(
                <TouchableOpacity onPress={() => setSelectedRadio(item.id)} key={index}>
                <View style={styles.radioalign}>
                  <View style={styles.radio}>
                    {selectedRadio === item.id? <View style={styles.radioBG}></View> : null}
                  </View>
                  <Text style={styles.radiotext}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
        })
      }
    
     
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioalign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiotext: {
    fontSize: 20,
  },
  radioBG: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default Radio_Button_Dynamic;
