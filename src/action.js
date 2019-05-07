import { fromChromeEvent } from './functions'

// https://developer.chrome.com/extensions/browserAction#events
export const action = {
  get click$() {
    return fromChromeEvent(chrome.browserAction.onClicked)
  },
}

export const browserAction = action
