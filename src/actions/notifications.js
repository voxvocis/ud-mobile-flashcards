import { TOGGLE_NOTIFICATION } from './types'
import { Notifications, Permissions } from 'expo'
import { createNotification } from '../utils/helpers'

export const toggleNotification = () => ({
  type: TOGGLE_NOTIFICATION,
})

export const setLocalNotification = () => dispatch => (
  Permissions
    .askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync()

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(20)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: tomorrow,
            repeat: 'day',
          }
        )
        dispatch(toggleNotification())
      }
    })
)

export const clearLocalNotification = () => dispatch => {
  dispatch(toggleNotification())
  Notifications.cancelAllScheduledNotificationsAsync()
  dispatch(setLocalNotification())
}
