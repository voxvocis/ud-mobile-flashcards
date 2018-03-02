import React, { Component } from 'react'
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/es/integration/react'
import rootReducer from './src/reducers'
import { composeWithDevTools } from 'remote-redux-devtools'
import { StackNavigator } from 'react-navigation'
import Home from './src/components/Home'
import DeckDetailsView from './src/components/DeckDetailsView'
import QuizView from './src/components/QuizView'
import CreateDeckView from './src/components/CreateDeckView'
import CreateCardView from './src/components/CreateCardView'

const persistConfig = {
  key: 'flashcards4',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
)

const persistor = persistStore(store)

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    DeckDetailsView: {
      screen: DeckDetailsView,
    },
    QuizView: {
      screen: QuizView,
    },
    CreateCardView: {
      screen: CreateCardView,
    },
    CreateDeckView: {
      screen: CreateDeckView,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4509e',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: 'back',
    },
  }
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
