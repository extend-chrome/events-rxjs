import { fromChromeEvent } from './fromChromeEvent'

// https://developer.chrome.com/extensions/notifications#events
export const notifications = {
  get closeStream() {
    return fromChromeEvent<[string, boolean]>(
      chrome.notifications.onClosed,
    )
  },
  get clickStream() {
    return fromChromeEvent<[string]>(
      chrome.notifications.onClicked,
    )
  },
  get buttonClickStream() {
    return fromChromeEvent<[string, number]>(
      chrome.notifications.onButtonClicked,
    )
  },
  get permissionLevelChangeStream() {
    return fromChromeEvent<[string]>(
      chrome.notifications.onPermissionLevelChanged,
    )
  },
}

// DEPRECATED NOTIFICATION EVENTS
// onShowSettings
