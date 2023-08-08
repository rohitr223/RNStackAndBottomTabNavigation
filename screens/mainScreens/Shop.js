import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop</Text>
    </SafeAreaView>
  )
}

export default Shop

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EEE',
  }
})