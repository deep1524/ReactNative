/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {StyleSheet} from 'react-native';
import User from './components/flatlist';
import Basic from './components/basic';
import Custom from './components/custom';
import MakeGrid from './components/MakeGrid';

function App() {
  return (
    <>
      {/* <Basic />
      <User />
      <Custom /> */}
      <MakeGrid />
    </>
  );
}

const styles = StyleSheet.create({
  textbox: {fontSize: 18, borderColor: 'red', borderWidth: 2},
});
export default App;
