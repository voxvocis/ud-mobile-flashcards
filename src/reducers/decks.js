import { ADD_DECK, ADD_QUIZ } from '../actions/types'

export default function decks (state = {}, action) {
  const { deckTitle } = action
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          ['title']: deckTitle,
          ['questions']: [],
        },
      }
    case ADD_QUIZ :
      const { question, answer } = action.quizObject
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          ['questions']: [
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
