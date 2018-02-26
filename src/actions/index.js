export const ADD_DECK = 'ADD_DECK'
export const ADD_QUIZ = 'ADD_QUIZ'

export const addDeck = deckTitle => ({
  type: ADD_DECK,
  deckTitle,
})

export const addQuiz = quizObject => ({
  type: ADD_QUIZ,
  quizObject,
})