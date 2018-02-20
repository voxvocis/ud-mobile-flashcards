import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'

/*
  Deck List View (Default View)
  displays the title of each Deck
  displays the number of cards in each deck
*/

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Decks',
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
           title="Go to DeckView"
           onPress={() => this.props.navigation.navigate('DeckView')}
         />
      </View>
    )
  }
}
