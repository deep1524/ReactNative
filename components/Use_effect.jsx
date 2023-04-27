import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Use_effect = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
console.warn("hello")
    },[])
  return (
   <View>
    <Text>Use Effect</Text>
    <Text>{count}</Text>

    <Button title='click' onPress={()=>setCount(count+1)}></Button>
   </View>
  )
}

export default Use_effect