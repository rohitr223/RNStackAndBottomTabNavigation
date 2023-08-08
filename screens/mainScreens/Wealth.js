import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Wealth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Wealth</Text>
    </SafeAreaView>
  )
}

export default Wealth

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE',
  }
})