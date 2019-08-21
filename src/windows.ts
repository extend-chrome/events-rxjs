import { fromChromeEvent } from './fromChromeEvent'

// https://developer.chrome.com/extensions/windows#events
export const windows = {
  get createStream() {
    return fromChromeEvent<[chrome.windows.Window]>(
      chrome.windows.onCreated,
    )
  },
  get removeStream() {
    return fromChromeEvent<[number]>(chrome.windows.onRemoved)
  },
  get focusChangeStream() {
    return fromChromeEvent<[number]>(
      chrome.windows.onFocusChanged,
    )
  },
}
