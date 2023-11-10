import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import CoursesScreen from './src/screen/CoursesScreen';
import CoursesInformationScreen from './src/screen/CoursesInformationScreen';
const  Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Anasayfa"
          component={HomeScreen}        
        />
        <Stack.Screen
          name="Kurslarım"
          component={CoursesScreen}
        />
        <Stack.Screen
          name="Kurs Bilgilerim"
          component={CoursesInformationScreen}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
 
});
