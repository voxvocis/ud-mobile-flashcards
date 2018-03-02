import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import DeckView from './DeckView'
import * as actions from '../actions'

class Home extends Component {
  componentDidMount() {
    if (!this.props.notified) {
      this.props.setLocalNotification()
    }
  }

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
          <View style={styles.deckContainer}>
            {decks
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
            color="white"
            onPress={() => this.props.navigation.navigate('CreateDeckView')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    backgroundColor: '#f4509e',
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: 30,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state) {
  let { decks, notifications } = state
  return {
    decks: Object.values(decks),
    notified: notifications.notified,
  }
}

export default connect(mapStateToProps, actions)(Home)
