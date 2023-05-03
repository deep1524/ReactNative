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
import Responsive_Layout from './components/Responsive_Layout';
import Style_button_inReactNative from './components/Style_button_inReactNative';
import Radio_Button from './components/Radio_Button';
import Radio_Button_Dynamic from './components/Radio_Button_Dynamic';
import Loader from './components/Loader';
import Modal_open from './components/Modal';
import Status_Bar from './components/Status_Bar';
import Pressable_com from './components/Pressable_com';

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
      <Show_Hide_Components/> 
      <Unmount/>  
      <Responsive_Layout/>
      {/* <Style_button_inReactNative/> 
      <Radio_Button/>
        <Radio_Button_Dynamic/>
  <Loader/>
   <Modal_open/>
     <Status_Bar/>
   */}

      <Pressable_com />
    </>
  );
}

export default App;
