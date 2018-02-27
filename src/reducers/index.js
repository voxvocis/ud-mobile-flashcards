import { ADD_DECK, ADD_QUIZ } from '../actions'

function decks (state = {}, action) {
  const { deckTitle } = action
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          title: deckTitle,
          questions: [],
        },
      }
    case ADD_QUIZ :
      const { question, answer } = action.quizObject
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [
            ...state[deckTitle]['questions'],
            {
              question,
              answer,
            },
          ],
        },
      }
    default :
      return state
  }
}
export default decks

/*
Using AsyncStorage you'll manage an object whose shape is similar to this:
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
*/
