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
import Componentswithfaltlist from './components/Componentswithfaltlist';
import Section_List from './components/SectionList';
import Classcomponents from './components/Classcomponents';
import Use_effect from './components/Use_effect';

function App() {
  return (
    <>
        {/* <Basic />
       <User/>
      <Custom /> 
       <MakeGrid />
      <Componentswithfaltlist/> 
       <Section_List/> 
       <Classcomponents/>  */}
      <Use_effect/>
    </>
  );
}


export default App;
