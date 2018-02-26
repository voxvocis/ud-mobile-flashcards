import React, { Component } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import DeckView from './DeckView'

/*
  Deck List View (Default View)
  displays the title of each Deck -DONE
  displays the number of cards in each deck -DONE
  use real data
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

  onPressDeckDetails = (title, noOfCards) => {
    this.props.navigation.navigate('DeckDetailsView', {
      title,
      noOfCards,
    })
  }

  render() {
    return(
      <View style={{ flex: 1}}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            {mockData.map(deck => (
                <DeckView
                  key={deck.title}
                  title={deck.title}
                  noOfCards={deck.noOfCard}
                  onPress={() => this.onPressDeckDetails(deck.title, deck.noOfCard)}
                />
              ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="New Deck"
            onPress={() => this.props.navigation.navigate('CreateDeckView')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginBottom: 100,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    backgroundColor: '#f4509e',
    width: 300,
  }
})
