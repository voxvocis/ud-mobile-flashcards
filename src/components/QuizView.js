import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'

/*
  Quiz View
  displays a card question
  an option to view the answer (flips the card)
  a "Correct" button
  an "Incorrect" button
  the number of cards left in the quiz
  Displays the percentage correct once the quiz is complete
*/

export default class QuizView extends Component {
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
