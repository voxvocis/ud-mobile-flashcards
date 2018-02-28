import { ADD_DECK, ADD_QUIZ } from './types'

export const addDeck = deckTitle => ({
  type: ADD_DECK,
  deckTitle,
})

export const addQuiz = (deckTitle, quizObject) => ({
  type: ADD_QUIZ,
  deckTitle,
  quizObject,
})
