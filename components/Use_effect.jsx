import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Use_effect = () => {
    const [count,setCount]=useState(0);
    const [data,setData]=useState(100);
    useEffect(()=>{
console.warn("hello")
     },[data]) 
    //  single array pass (component did mount)
    // if you pass the any state in array then it will be componnt Didupdate
  return (
   <View>
    <Text>Use Effect</Text>
    <Text>component DidMount:  {count}</Text>
    <Text> Component DidUpdate:  {data}</Text>

    <Button title='click' onPress={()=>setCount(count+1)}></Button>
    <Button title='click' onPress={()=>setData(data+1)}></Button>

    <User info={{data,count}}/>
   </View>
  )
}

const User=(props)=>{
 
  useEffect(()=>{

  },[props.info.data])
return(
  <View>
    <Text style={{fontSize:24,color:"orange"}}>data:{props.info.data}</Text>
    <Text style={{fontSize:24,color:"orange"}}>Count:{props.info.count}</Text>
  </View>
)
}

export default Use_effect