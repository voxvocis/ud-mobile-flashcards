import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { alertUser } from '../utils/helpers'


class DeckDetailsView extends Component {
  constructor(props) {
    super(props)
  }

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

  startQuiz = () => {
    const { title } = this.props.navigation.state.params
    const { questions } = this.props.decks.filter(deck => deck.title === title)[0]
    if (!questions || questions.length === 0) {
      alertUser(
        'Deck is empty',
        'Add some questions!',
        this.createCard
      )
    } else {
      this.props.navigation.navigate('QuizView', {
        title,
        questions,
      })
    }
  }

  render() {
    const { title } = this.props.navigation.state.params
    console.log(this.props.decks)
    const { questions } = this.props.decks.filter(deck => deck.title === title)[0]
    return(
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={{alignSelf: 'center' }}>
          <Text style={styles.paragraph}>{questions ? questions.length : 0} cards</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#f4509e"
            title="Start Quiz"
            onPress={this.startQuiz}
           />
          <Button
            color="#f4509e"
            title="Create New Question"
            onPress={this.createCard}
           />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  }
})

function mapStateToProps(state) {
  let { decks } = state
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(DeckDetailsView)
