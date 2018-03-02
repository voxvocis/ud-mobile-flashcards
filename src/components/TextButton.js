import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchContainer}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchContainer: {
    backgroundColor: '#f4509e',
    borderRadius: 5,
    width: 200,
    height: 35,
    margin: 10,
  },
  reset: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  }
})
