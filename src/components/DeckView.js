import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'

/*
  Individual Deck View
  displays the title of the Deck
  displays the number of cards in the deck
  displays an option to start a quiz on this specific deck
  An option to add a new question to the deck
*/

export default class DeckView extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Deck View',
    }
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
           title="Add Card"
           onPress={() => this.props.navigation.navigate('CreateCardView')}
         />
         <Button
            title="Start Quiz"
            onPress={() => this.props.navigation.navigate('QuizView')}
          />
      </View>
    )
  }
}
