import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'

/*
  New Deck View
  An option to enter in the title for the new deck
  An option to submit the new deck title
*/

export default class CreateDeckView extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.otherParam : 'Create Deck View',
    }
  }

  render() {
    return(
      <NotFound />
    )
  }
}
