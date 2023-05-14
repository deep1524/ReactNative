import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
// data api with data lets do itsunday
const List_api_with_data_deleteMethod = () => {
  const [data, setData] = useState([]);
  const getapiData = async () => {
    let url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };
  const delete_user= async(id)=>{
    let url = `http://10.0.2.2:3000/users/${id}`;
    let result =await fetch(url,{
      method: 'DELETE'
    });
    result = await result.json();
if(result){
  console.warn("User deleted successfully");
  getapiData();
}
  }
  useEffect(() => {
    getapiData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>List_api_with_data</Text>
      <View style={styles.datawraper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Email</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.datawraper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.email}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="delete" onPress={()=>delete_user(item.id)}></Button>
              </View>
              <View style={{flex: 1}}>
                <Button title="update"></Button>
              </View>
            </View>
          ))
        : null}
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datawraper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 8,
  },
});

export default List_api_with_data_deleteMethod;
