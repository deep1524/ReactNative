// Make Dynamic Grid

import React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
const user = [
    {
      id: 1,
      name: 'DEEP',
    },
    {
      id: 2,
      name: 'DEEP Yadav',
    },
    {
      id: 3,
      name: 'Pooja',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 4,
      name: 'Dk',
    },
    {
      id: 8,
      name: 'Dk',
    },
    {
      id: 8,
      name: 'Dk',
    },
    {
      id: 5,
      name: 'Dk Yadav',
    },
    {
      id: 6,
      name: 'Dk Yadav',
    },
    {
      id: 6,
      name: 'anil',
    },
    {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
      {
        id: 6,
        name: 'anil',
      },
  ];
const MakeGrid = () => {
  return (
    <>
      <Text>MAke Dynamic Grid</Text>
      <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
         
     {
        user.map((item)=><Text style={styles.text}>{item.name}</Text>)
     }
    
      </View>
      </ScrollView> 
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 2,
    padding: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    margin: 10,
  },
});

export default MakeGrid;
