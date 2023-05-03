import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from "react-native-webview"
const Web_view = () => {
  return (
    <WebView source={{uri:"https://www.jiocinema.com/"}}/>
    // <View>
    //   <Text>webview</Text>
    // </View>
  );
};

export default Web_view;
