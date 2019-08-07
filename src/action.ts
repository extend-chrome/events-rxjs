import { fromChromeEvent } from './fromChromeEvent'

/**
 * Events for `chrome.browserAction`
 *
 * https://developer.chrome.com/extensions/browserAction#events
 */
export const action = {
  /**
   * Observable from `chrome.browserAction.onClicked`
   *
   * Emits when the browser action is clicked.
   *
   * https://developer.chrome.com/extensions/browserAction#event-onClicked
   */
  get clickStream() {
    return fromChromeEvent<[chrome.tabs.Tab]>(
      chrome.browserAction.onClicked,
    )
  },
}

export const browserAction = action
