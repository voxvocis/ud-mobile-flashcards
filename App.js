import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import reducer from './src/reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import NotFound from './src/components/NotFound'
import Home from './src/components/Home'
import DeckView from './src/components/DeckView'
import QuizView from './src/components/QuizView'
import CreateDeckView from './src/components/CreateDeckView'
import CreateCardView from './src/components/CreateCardView'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

/*
  StackNavigator is a function that takes a route configuration object and an options object and returns a React component.
*/
const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        }
      },
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        }
      }
    },
    QuizView: {
      screen: QuizView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        }
      }
    },
    CreateCardView: {
      screen: CreateCardView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        }
      }
    },
    CreateDeckView: {
      screen: CreateDeckView,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'blue',
        }
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return (
      //<Provider store={createStore(reducer)}>
        //<View style={{flex: 1, padding: 0, margin:0}}>
          //<UdaciStatusBar backgroundColor={'purple'} barStyle="light-content" />
          <MainNavigator />
      //  </View>
      //</Provider>
    )
  }
}
