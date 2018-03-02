import React, { Component } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import * as actions from '../actions'

class QuizView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.navigation.state.params.questions,
      questionNo: 0,
      numberOfCards: this.props.navigation.state.params.questions.length,
      numberOfCorrectAnswers: 0,
      showQuestion: true,
      displayResult: false,
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? `${params.title} Quiz` : 'Quiz',
    }
  }

  pressCorrect = () => {
    const { numberOfCards, numberOfCorrectAnswers, displayResult } = this.state
    const nextQuestion = this.state.questionNo + 1

    if (nextQuestion < numberOfCards) {
      this.setState({
        questionNo: nextQuestion,
        numberOfCorrectAnswers: numberOfCorrectAnswers + 1,
      })
    } else {
      this.setState({
        numberOfCorrectAnswers: numberOfCorrectAnswers + 1,
        displayResult: true,
      })
    }
  }

  pressIncorrect = () => {
    const { questions, displayResult } = this.state
    const nextQuestion = this.state.questionNo + 1

    if (nextQuestion < questions.length) {
      if (this.props.notified) {
        this.props.toggleNotification()
        this.props.setLocalNotification()
      }
      this.setState({
        questionNo: nextQuestion,
      })
    } else {
      this.setState({
        displayResult: true,
      })
    }
  }

  displayAnswer = () => {
    const { showQuestion } = this.state
    this.setState({
      showQuestion: !showQuestion,
    })
  }

  reset = () => {
    const { showQuestion } = this.state
    this.setState({
      questionNo: 0,
      numberOfCorrectAnswers: 0,
      showQuestion: true,
      displayResult: false,
    })
  }

  render() {
    const { questionNo, numberOfCards, showQuestion, displayResult, numberOfCorrectAnswers } = this.state
    const { question, answer } = this.state.questions[questionNo]
    const { title } = this.props.navigation.state.params
    return (
      <View style={{ flex: 1 }}>
        {!displayResult ? (
          <View style={styles.quizContainer}>
            <View style={{ marginTop: 100 }}>
              <Text style={styles.heading}>{showQuestion ? question : answer}</Text>
            </View>
            <View style={{alignSelf: 'center' }}>
              <Button
                color='#f4509e'
                style={styles.paragraph}
                title={showQuestion ? 'Show Answer' : 'Show Question'}
                onPress={this.displayAnswer}
               />
            </View>
            <View style={styles.buttonContainer}>
              <TextButton onPress={this.pressCorrect}>
                Correct
              </TextButton>
              <TextButton onPress={this.pressIncorrect}>
                Incorrect
              </TextButton>
            </View>
            <View style={{alignSelf: 'center', marginBottom: 100}}>
              <Text style={styles.paragraph}>Questions left: {numberOfCards - (questionNo + 1)}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <View style={{ marginTop: 100 }}>
              <Text style={styles.heading}>You guessed correct:</Text>
            </View>
            <View style={{alignSelf: 'center' }}>
              <Text style={styles.paragraph}>{`${numberOfCorrectAnswers} times`}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                color='#f4509e'
                title="Restart Quiz"
                onPress={this.reset}
               />
               <Button
                color='#f4509e'
                title={`Back to ${title} Deck`}
                onPress={() => this.props.navigation.goBack()}
                />
            </View>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  paragraph: {
    color: '#f4509e',
    fontSize: 15,
    fontWeight: 'normal',
  }
})

function mapStateToProps(state) {
  let { notifications } = state
  return {
    notified: notifications.notified,
  }
}

export default connect(mapStateToProps, actions)(QuizView)
