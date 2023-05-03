import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  const [show, setShow] = useState(false);
  const display_loader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);

    // api calls in 3 seconds
  };
  return (
    <>
      <View style={styles.main}>
        <Text>Activity Indicator(Loader)</Text>
      </View>
      <View style={styles.main}>
        <ActivityIndicator
          size={'large'}
          color={'red'}
          animating={show}></ActivityIndicator>
        <Button title="show loader" onPress={display_loader} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loader;
