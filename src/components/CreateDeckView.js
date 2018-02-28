import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import * as actions from '../actions'

/*
  New Deck View
  An option to enter in the title for the new deck -DONE
  An option to submit the new deck title -DONE

  Submit the data and navigate back -DONE
  The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
  Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
*/

class CreateDeckView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.title : 'Create Deck View',
    }
  }

  submitCard = () => {
    // Add question
    const { title } = this.state
    if (!title) {
      return
    }
    this.props.addDeck(title)
    // Navigate back
    this.props.navigation.navigate('DeckDetailsView', {
      title,
    })
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.heading}> What is the title of your new deck? </Text>
        </View>
        <View>
          <TextInput
            placeholder='Enter a title'
            style={styles.titleInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />
        </View>
        <Button
           title="Create Deck"
           onPress={this.submitCard}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    color: '#f4509e',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  titleInput: {
    color: '#f4509e',
    fontSize: 15,
    fontWeight: 'normal',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  }
})

export default connect(null, actions)(CreateDeckView)
