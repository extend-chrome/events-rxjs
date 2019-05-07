import { fromChromeEvent } from './functions'

// https://developer.chrome.com/extensions/notifications#events
export const notifications = {
  get close$() {
    return fromChromeEvent(chrome.notifications.onClosed)
  },
  get click$() {
    return fromChromeEvent(chrome.notifications.onClicked)
  },
  get buttonClick$() {
    return fromChromeEvent(
      chrome.notifications.onButtonClicked,
      (noteId, buttonIndex) => ({ noteId, buttonIndex }),
    )
  },
  get permissionLevelChange$() {
    return fromChromeEvent(
      chrome.notifications.onPermissionLevelChanged,
    )
  },
}

// DEPRECATED NOTIFICATION EVENTS
// onShowSettings
