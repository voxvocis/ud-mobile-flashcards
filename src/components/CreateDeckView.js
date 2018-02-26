import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import * as actions from '../actions'

/*
  New Deck View
  An option to enter in the title for the new deck -DONE
  An option to submit the new deck title -DONE

  Submit the data and navigate back
*/

class CreateDeckView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.otherParam : 'Create Deck View',
    }
  }

  submitCard = () => {
    // Add question
    const { text } = this.state
    if (!text) {
      return
    }
    console.log(this.props)
    this.props.addDeck(text)
    // Navigate back
    this.props.navigation.goBack()
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
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <Button
           title="Submit"
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
