import { fromChromeEvent } from './functions'

// https://developer.chrome.com/extensions/contextMenus#events

export const contextMenus = {
  get click$() {
    return fromChromeEvent(chrome.contextMenus.onClicked)
  },
}

