import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'

/*
  New Question View
  An option to enter in the question -DONE
  An option to enter in the answer -DONE
  An option to submit the new question -DONE

  Submit the data and navigate back
*/

export default class CreateCardView extends Component {
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
      title: params ? params.otherParam : 'Create Card View',
    }
  }

  submitQuestion = () => {
    // Add question
    // Navigate back
    this.props.navigation.goBack()
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
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
        <Button
           title="Submit"
           onPress={this.submitQuestion}
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
