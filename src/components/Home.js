import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import TextButton from './TextButton'
import DeckView from './DeckView'

/*
  Deck List View (Default View)
  displays the title of each Deck
  displays the number of cards in each deck
*/

const mockData = [
  {title: 'React.js', noOfCard: 5},
  {title: 'Redux', noOfCard: 2},
  {title: 'React Native', noOfCard: 10},
  {title: 'React Navigation', noOfCard: 3},
  {title: 'Expo', noOfCard: 6},
  {title: 'es6', noOfCard: 6},
]

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Decks',
  }

  onPressDeckDetails = (title, noOfCard) => {
    this.props.navigation.navigate('DeckDetailsView', {
      title,
      noOfCard,
    })
  }

  render() {
    return(
      <View style={{ flex: 1}}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            {mockData.map(deck => {
              console.log(deck.title)
              return(
                <DeckView
                  key={deck.title}
                  title={deck.title}
                  noOfCards={deck.noOfCard}
                  onPress={() => this.onPressDeckDetails(deck.title, deck.noOfCard)}
                />
              )
            })}
          </View>
        </ScrollView>
        <View style={{ flex: 1, marginBottom: 100, marginTop: 20}}>
          <Button
             title="Create a New Deck"
             onPress={() => this.props.navigation.navigate('CreateDeckView')}
           />
        </View>
      </View>
    )
  }
}
