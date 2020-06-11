import { fromChromeEvent } from './fromChromeEvent'

// https://developer.chrome.com/extensions/alarms#events
export const alarms = {
  get alarms() {
    return fromChromeEvent(chrome.alarms.onAlarm)
  },
}
