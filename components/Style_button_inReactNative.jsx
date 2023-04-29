import React from 'react'
import { Text, View,TouchableHighlight, StyleSheet } from 'react-native'

const Style_button_inReactNative = () => {
  return (
    <View style={styles.main}>
         <TouchableHighlight>
        <Text style={[styles.btn,styles.Sucess]}>Sucess</Text>
        </TouchableHighlight>
        <TouchableHighlight>
        <Text style={styles.btn}>Button</Text>
        </TouchableHighlight>
       
        </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1
    },
btn:{
backgroundColor:"green",
textAlign:"center",
padding:5,
fontSize:20,
borderRadius:5,
margin:20,
shadowColor:"black",
elevation:50,
shadowOpacity:1
},
Sucess:{
    backgroundColor:"yellow",
}
})
export default Style_button_inReactNative