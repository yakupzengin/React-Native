import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// rnfs
export default function HomeScreen({navigation}) {
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginVertical:20}}>Ana Ekran</Text>
      
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Sayaç')}
      />
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate('Kutu Uygulaması')}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({})