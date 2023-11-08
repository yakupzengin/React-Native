import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {
  const courses = [
    {name:"Angular",id : 1},
    {name:"React Js",id : 2},
    {name:"Java",id : 3},
    {name:"Python",id : 4},
    {name:"Kotlin",id : 5},
    {name:"React Native",id : 6},
  
  ]
  return (
    <FlatList data={courses}

    // scroll indicator
    
    // horizontal 
    // showsHorizontalScrollIndicator = {false}
    
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <Text style={styles.content}> {item.name}</Text>
    }}
    />
  );
}

const styles = StyleSheet.create({
  content:{
    fontSize:20,
    backgroundColor : "yellow",
    marginVertical : 10,
    padding : 20
  }
});
