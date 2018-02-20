import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'

/*
  New Question View
  An option to enter in the question
  An option to enter in the answer
  An option to submit the new question
*/

export default class CreateCardView extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Quiz',
    }
  }

  render() {
    return(
      <NotFound />
    )
  }
}
