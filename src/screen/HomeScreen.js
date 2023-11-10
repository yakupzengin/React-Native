import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// rnfs
export default function HomeScreen({navigation}) {
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})