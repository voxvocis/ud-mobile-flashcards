import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import * as actions from '../actions'

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
      title: params ? params.title : 'Create a new Deck',
    }
  }

  submitCard = () => {
    const { title } = this.state
    if (!title) {
      return
    }
    this.props.addDeck(title)
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
        <View style={styles.submitContainer}>
          <TextButton onPress={this.submitCard}>
            Create Deck
          </TextButton>
        </View>
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
  },
  submitContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default connect(null, actions)(CreateDeckView)
