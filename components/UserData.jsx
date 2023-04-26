import { StyleSheet, Text, View} from 'react-native';

const UserData = props => {
    const item = props.item;
    return (
      <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    box: {flexDirection: 'row', borderWidth: 2, borderColor: 'black', margin: 4},
    item: {
      fontSize: 18,
      color: 'orange',
      flex: 1,
    },
  });
  export default UserData