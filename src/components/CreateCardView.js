import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import * as actions from '../actions'


class CreateCardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.title : 'Create Card View',
    }
  }

  submitQuestion = () => {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params

    if (!question || !answer) {
      return
    }
    this.props.addQuiz(title, {
      question,
      answer,
    })

    this.props.navigation.goBack()
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}> Add a new Question </Text>
        </View>
        <View>
          <TextInput
            placeholder='Enter a question'
            style={styles.titleInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
        </View>
        <View>
          <TextInput
            placeholder='Enter an answer'
            style={styles.titleInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
        </View>
        <View style={styles.submitContainer}>
          <TextButton onPress={this.submitQuestion}>
            Submit
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default connect(null, actions)(CreateCardView)
