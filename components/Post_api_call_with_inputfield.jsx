import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Post_api_call_with_inputfield = () => {
    const [name,setName]= useState("");
    const [age,setAge]= useState("");
    const [email,setEmail]= useState("");
    const [errorname,setNameerror]= useState(false);
    const [errorage,setAgeerror]= useState(false);
    const [erroremail,setEmailerror]= useState(false);
   
    const saveData= async()=>{
        if(!name){
            setNameerror(true);
        }else{
            setNameerror(false);
        }
        if(!age){
            setAgeerror(true);
        }else{
            setAgeerror(false); 
        }
        if(!email){
            setEmailerror(true);
        }else{
            setEmailerror(false);
        }
        if(!name || !age || !email){
            return false;
        }
       
        const data={
            name: name,
            age: age,
            email: email
        }
        const url = 'http://10.0.2.2:3000/users';

        let res = await fetch(url, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body:JSON.stringify(data)
        });
        res= await res.json();
     
       if(res){
        console.warn("DATA added successfully");
       }
    }
  return (
    <View>
      <Text>Post_api_call_with_inputfield</Text>
      <TextInput placeholder='Enter Your Name' style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
      {errorname ?<Text style={styles.errorText}>Input filed empty</Text>:null}
      <TextInput placeholder='Enter Your Age' style={styles.input} value={age} onChangeText={(text)=>setAge(text)}/>
      {errorage ?<Text style={styles.errorText}>Input filed empty</Text>:null}
      <TextInput placeholder='Enter Your Email' style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
      {erroremail ?<Text style={styles.errorText}>Input filed empty</Text>:null}
      <Button title='ADD DATA' onPress={saveData}/>
    </View>
  );
};

const styles=StyleSheet.create({
    input:{
        borderColor:"red",
        borderWidth:1,
        margin:20,
        padding:10,
        marginBottom:5
    },
    errorText:{
        color:"red",
        marginLeft:20
    }

       
    
})

export default Post_api_call_with_inputfield;
