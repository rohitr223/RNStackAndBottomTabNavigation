import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account</Text>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE',
  }
})