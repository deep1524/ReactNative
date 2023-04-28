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
import Show_Hide_Components from './components/Show_Hide_Components';
import Unmount from './components/useEffect_unmount_life_cycle';

function App() {
  return (
    <>
          {/* <Basic />
       <User/>
      <Custom /> 
       <MakeGrid />
      <Componentswithfaltlist/> 
       <Section_List/> 
       <Classcomponents/>  
      <Use_effect/> 
      <Show_Hide_Components/> */}
      <Unmount/>
    </>
  );
}


export default App;
