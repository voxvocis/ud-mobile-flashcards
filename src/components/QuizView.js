import React, { Component } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import NotFound from './NotFound'
import { connect } from 'react-redux'

/*
  Quiz View
  displays a card question -DONE
  an option to view the answer (flips the card)
  a "Correct" button -DONEish
  an "Incorrect" button -DONEish
  the number of cards left in the quiz -DONE
  Displays the percentage correct once the quiz is complete
*/

/*
The Quiz view starts with a question from the selected deck. -DONE
The question is display, along with a button to show the answer. -DONE
Pressing the 'Show Answer' button displays the answer. -DONE
Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect' -DONE
The view displays the number of questions remaining. -DONE
When the last question is answered, a score is displayed.
This can be displayed as a percentage of correct answers or just the number of questions answered correctly. -DONE

When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views. -DONE
*/

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
      if (!this.props.notified) {
        this.props.toggleNotification()
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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 100 }}>
              <Text style={styles.heading}>{showQuestion ? question : answer}</Text>
            </View>
            <View style={{alignSelf: 'center' }}>
              <Button
                 style={styles.paragraph}
                 title={showQuestion ? 'Show Answer' : 'Show Question'}
                 onPress={this.displayAnswer}
               />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 100}}>
              <Button
                 title="Correct"
                 onPress={this.pressCorrect}
               />
               <Button
                  title="Incorrect"
                  onPress={this.pressIncorrect}
                />
            </View>
            <View style={{alignSelf: 'center', marginBottom: 100}}>
              <Text style={styles.paragraph}>Questions left: {numberOfCards - (questionNo + 1)}</Text>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 100 }}>
              <Text style={styles.heading}>You guessed correct:</Text>
            </View>
            <View style={{alignSelf: 'center' }}>
              <Text style={styles.paragraph}>{`${numberOfCorrectAnswers} times`}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 100}}>
              <Button
                 title="Restart Quiz"
                 onPress={this.reset}
               />
               <Button
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

export default connect(mapStateToProps)(QuizView)
