import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/es/integration/react'
import rootReducer from './src/reducers'
// import reducer from './src/reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { TabNavigator, StackNavigator } from 'react-navigation'
import NotFound from './src/components/NotFound'
import Home from './src/components/Home'
import DeckDetailsView from './src/components/DeckDetailsView'
import QuizView from './src/components/QuizView'
import CreateDeckView from './src/components/CreateDeckView'
import CreateCardView from './src/components/CreateCardView'


/*
  TODO:
  fix https://github.com/rt2zz/redux-persist
  fix redux

*/

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, undefined, devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
))
const persistor = persistStore(store)

/*
  StackNavigator is a function that takes a route configuration object and an options object and returns a React component.
*/
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
