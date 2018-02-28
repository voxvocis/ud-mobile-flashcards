import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'
import { connect } from 'react-redux'

/*
  Individual Deck View
  displays the title of the Deck -DONE
  displays the number of cards in the deck -DONE
  displays an option to start a quiz on this specific deck
  An option to add a new question to the deck -DONE
*/

class DeckDetailsView extends Component {
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

  createCard = () => {
    const { title } = this.props.navigation.state.params
    this.props.navigation.navigate('CreateCardView', {
      title,
    })
  }

  alertUser = () => {
    Alert.alert(
      'Deck is empty',
      'Add some questions!',
      [
        {text: 'OK', onPress: () => this.createCard()},
      ],
    )
  }

  startQuiz = () => {
    const { title } = this.props.navigation.state.params
    const { questions } = this.props.decks[title]
    if (true) {
      this.alertUser()
    } else {
      this.props.navigation.navigate('QuizView', {
        title,
        questions,
      })
    }
  }

  render() {
    const { title } = this.props.navigation.state.params
    const { questions } = this.props.decks[title]
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={{alignSelf: 'center' }}>
          <Text style={styles.paragraph}>{questions ? questions.length : 0} cards</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 80}}>
          <Button
             title="Start Quiz"
             onPress={this.startQuiz}
           />
          <Button
             title="Create New Question"
             onPress={this.createCard}
           />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    backgroundColor: '#f4509e',
    width: 300,
  },
  heading: {
    color: '#f4509e',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#f4509e',
    fontSize: 15,
    fontWeight: 'normal',
  }
})

function mapStateToProps(state) {
  let { _persist, ...decks } = state
  return {
    decks: decks,
  }
}

export default connect(mapStateToProps)(DeckDetailsView)
