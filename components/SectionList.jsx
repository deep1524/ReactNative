import React from 'react';
import {SectionList, Text, View} from 'react-native';
const user = [
  {
    id: 1,
    name: 'DEEP',
    data: ['PHP', 'REACT', 'HTML', 'CSS'],
  },
  {
    id: 2,
    name: 'DEEP Yadav',
    data: ['PHP', 'REACT', 'HTML', 'RUBY'],
  },
  {
    id: 3,
    name: 'Pooja',
    data: ['SQL', 'REACT', 'AWS', 'RUBY'],
  },
  {
    id: 4,
    name: 'Dk',
    data: ['SQL', 'JAVA', 'AWS', 'RUBY'],
  },
];
const Section_List = () => {
  return (
    <View>
      <Text>SECTION LIST </Text>

      <SectionList
        sections={user}
        renderItem={({item}) => <Text style={{fontSize: 20,marginLeft:30}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{color: 'red',fontSize:25}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default Section_List;
