import { Alert } from 'react-native'

export function createNotification () {
  return {
    title: 'Time for a Quiz!',
    body: "Don't forget to do a quiz today",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export const alertUser = (title, body, action) => {
    Alert.alert(
      title,
      body,
      [
        {text: 'OK', onPress: () => action()},
      ],
    )
  }
