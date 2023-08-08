import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
    </SafeAreaView>
  )
}

export default History

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE',
  }
})