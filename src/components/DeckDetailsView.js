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

export default class DeckDetailsView extends Component {
  constructor(props) {
    super(props)
  }
  /*
    if we make navigationOptions a function then React Navigation will call it with an object
    containing { navigation, navigationOptions, screenProps } -- in this case, all we care about is navigation,
    which is the same object that is passed to your screen props as this.props.navigation.
  */
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.title : 'Deck View',
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
