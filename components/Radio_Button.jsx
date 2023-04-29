import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Radio_Button = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      <Text>Radio Button</Text>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioalign}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radiotext}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioalign}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radiotext}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
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

export default Radio_Button;
