import React, { Component } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import DeckView from './DeckView'
import * as actions from '../actions'

/*
  Deck List View (Default View)
  displays the title of each Deck -DONE
  displays the number of cards in each deck -DONE
  use real data -DONE
*/

class Home extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Decks',
  }

  onPressDeckDetails = (title) => {
    this.props.navigation.navigate('DeckDetailsView', {
      title,
    })
  }

  render() {
    const { decks } = this.props
    return(
      <View style={{ flex: 1}}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            {decks
              .filter(deck => deck.title)
              .map(deck => (
                <DeckView
                  key={deck.title}
                  title={deck.title}
                  noOfCards={deck.questions ? deck.questions.length: 0}
                  onPress={() => this.onPressDeckDetails(deck.title)}
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

function mapStateToProps(state) {
  let { _persist, ...decks } = state
  return {
    decks: Object.values(decks)
  }
}

export default connect(mapStateToProps, actions)(Home)
