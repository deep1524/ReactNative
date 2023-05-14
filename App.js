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
import Plate_form from './components/plateform';
import Web_view from './components/webview';
import Stack_Naviagation from './components/Stack_Naviagation';
import Tab_navigation from "./components/tab_navigation"
import Api_call from './components/Api_call';
import List_with_Api_call from './components/List_with_api_call';
import FlatList_with_Api_call from './components/FlatList_api_call';
import Json_server from './components/Json_server';
import Post_api_call from './components/Post_api_call';
import Post_api_call_with_inputfield from './components/Post_api_call_with_inputfield';
import List_api_with_data from './components/List_api_with_data';
import List_api_with_data_deleteMethod from './components/List_api_with_data';
import Search_with_api from './components/Search_with_api';
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
      <Pressable_com />
        <Plate_form/>
           <Web_view/>
            <Stack_Naviagation/>
              <Tab_navigation/>
               <Api_call/>
               <List_with_Api_call/>
                <FlatList_with_Api_call/>
                 <Json_server/>
                   <Post_api_call/>
                    <Post_api_call_with_inputfield/>
                    <List_api_with_data_deleteMethod/>most imported components
   */}

   
   <Search_with_api/>
    </>
  );
}

export default App;
