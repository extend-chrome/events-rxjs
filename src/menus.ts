import { fromChromeEvent } from './fromChromeEvent'

/**
 * Events for `chrome.contextMenus`
 *
 * https://developer.chrome.com/extensions/contextMenus#events
 */
export const menus = {
  /**
   * Observable from `chrome.contextMenus.onClicked`
   *
   * Emits when an extension context menu is clicked.
   *
   * https://developer.chrome.com/extensions/contextMenus#event-onClicked
   */
  get clickStream() {
    return fromChromeEvent<
      [chrome.contextMenus.OnClickData, chrome.tabs.Tab]
    >(chrome.contextMenus.onClicked)
  },
}

export const contextMenus = menus
