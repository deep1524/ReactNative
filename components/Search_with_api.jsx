import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const Search_with_api = () => {
    const [data,setData]=useState("");
    const searchUser= async(search)=>{
        let url=`http://10.0.2.2:3000/users?q=${search}`
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result);
        if (result) {
          setData(result);
        }
      
    }
    // console.warn(data)
  return (
    <View style={{flex:1}}>
        <Text>Search_with_api</Text>
        <TextInput onChangeText={(text)=>searchUser(text)} style={{borderColor:"skyblue",borderWidth:1,margin:15,fontSize:20}} placeholder='enter your search item'/>
        {
            data.length?data.map ((item)=><View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                <Text style={{fontSize:15}}>{item.name}</Text>
                <Text style={{fontSize:15}}>{item.age}</Text>
                <Text style={{fontSize:15}}>{item.email}</Text>
            </View>):null
        }
        </View>
  )
}

export default Search_with_api 