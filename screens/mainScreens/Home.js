import { Button, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Go To Scan' onPress={() => navigation.navigate('ScanToPay')} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})