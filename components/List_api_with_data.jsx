import React, {useEffect, useState} from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// data api with data lets do itsunday
const List_api_with_data_deleteMethod = () => {
  const [data, setData] = useState([]);
  const [seletcteddata, setSelectedData] = useState(undefined);
  const [showmodal, setShowmodal] = useState(false);
  const getapiData = async () => {
    let url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };
  const delete_user = async id => {
    let url = `http://10.0.2.2:3000/users/${id}`;
    let result = await fetch(url, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      console.warn('User deleted successfully');
      getapiData();
    }
  };
  const update_user = async data => {
    setShowmodal(true);
    setSelectedData(data);
  };
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
                <Button
                  title="delete"
                  onPress={() => delete_user(item.id)}></Button>
              </View>
              <View style={{flex: 1}}>
                <Button
                  title="update"
                  onPress={() => update_user(item)}></Button>
              </View>
            </View>
          ))
        : null}
      {/* modal */}
      <Modal visible={showmodal} transparent={true}>
        <UserModal setShowmodal={setShowmodal} seletcteddata={seletcteddata} />
      </Modal>
    </ScrollView>
  );
};

const UserModal = props => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (props.seletcteddata) {
      setName(props.seletcteddata.name);
      setAge(props.seletcteddata.age.toString());
      setEmail(props.seletcteddata.email);
    }
  }, [props.seletcteddata]);
  return (
    <View style={styles.centeredview}>
      <View style={styles.modalView}>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="enter your name"></TextInput>
        <TextInput
          value={age}
          style={styles.input}
          placeholder="enter your age"></TextInput>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="enter your email"></TextInput>
        <View style={{marginBottom: 10}}>
          <Button title="udpdate"></Button>
        </View>

        <Button title="close" onPress={() => props.setShowmodal(false)} />
      </View>
    </View>
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
  centeredview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    marginBottom: 15,
  },
});

export default List_api_with_data_deleteMethod;
