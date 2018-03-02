import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DeckView({title, noOfCards, onPress}) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress} style={styles.touchContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={{color: 'white'}}>{noOfCards} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  touchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    backgroundColor: '#f4509e',
    borderRadius: 5,
    width: 300,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
