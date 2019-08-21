import { fromChromeEvent } from './fromChromeEvent'

// https://developer.chrome.com/extensions/tabs#events
export const tabs = {
  // createStream, // cb :: tab -> void
  get createStream() {
    return fromChromeEvent<[chrome.tabs.Tab]>(
      chrome.tabs.onCreated,
    )
  },
  // updateStream, // cb :: (tabId, changeInfo, tab) -> void
  get updateStream() {
    return fromChromeEvent<
      [number, chrome.tabs.TabChangeInfo, chrome.tabs.Tab]
    >(chrome.tabs.onUpdated)
  },
  // moveStream, // cb :: (tabId, moveInfo) -> void
  get moveStream() {
    return fromChromeEvent<[number, chrome.tabs.TabMoveInfo]>(
      chrome.tabs.onMoved,
    )
  },
  // highlightStream, // cb :: highlightInfo -> void
  get highlightStream() {
    return fromChromeEvent<[chrome.tabs.TabHighlightInfo]>(
      chrome.tabs.onHighlighted,
    )
  },
  // detachStream, // cb :: (tabId, detachInfo) -> void
  get detachStream() {
    return fromChromeEvent<[number, chrome.tabs.TabDetachInfo]>(
      chrome.tabs.onDetached,
    )
  },
  // attachStream, // cb :: (tabId, attachInfo) -> void
  get attachStream() {
    return fromChromeEvent<[number, chrome.tabs.TabAttachInfo]>(
      chrome.tabs.onAttached,
    )
  },
  // removeStream, // cb :: (tabId, removeInfo) -> void
  get removeStream() {
    return fromChromeEvent<[number, chrome.tabs.TabRemoveInfo]>(
      chrome.tabs.onRemoved,
    )
  },
  // replaceStream, // cb :: (addedTabId, removedTabId) -> void
  get replaceStream() {
    return fromChromeEvent<[number, number]>(
      chrome.tabs.onReplaced,
    )
  },
  // zoomStream, // cb :: zoomChangeInfo -> void
  get zoomStream() {
    return fromChromeEvent<[chrome.tabs.ZoomChangeInfo]>(
      chrome.tabs.onZoomChange,
    )
  },
}
// DEPRECATED TAB EVENTS
// onSelectionChanged
// onActiveChanged
// onHighlightChanged
