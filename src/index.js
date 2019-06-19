/* ============================================ */
/*            CHROME API OBSERVABLES            */
/* ============================================ */

import { fromChromeEvent } from './functions'

export { action, browserAction } from './action'
export { notifications } from './notifications'
export { contextMenus } from './contextMenus'
export { runtime } from './runtime'

/* ---------- single event namespaces --------- */

// https://developer.chrome.com/extensions/alarms#events
export const alarms = {
  alarms: () => fromChromeEvent(chrome.alarms.onAlarm),
}

// https://developer.chrome.com/extensions/proxy#events
export const proxy = {
  // proxyErrors, // cb :: details -> void
}

/* --------- multiple event namespaces -------- */

// Storage has one event for all storage areas: divide?
// https://developer.chrome.com/extensions/storage#events
export { storage } from './storage'

// https://developer.chrome.com/extensions/tabs#events
export const tabs = {
  // creations, // cb :: tab -> void
  // updates, // cb :: (tabId, changeInfo, tab) -> void
  // moves, // cb :: (tabId, moveInfo) -> void
  // activations, // cb :: activeInfo -> void
  // highlights, // cb :: highlightInfo -> void
  // detachments, // cb :: (tabId, detachInfo) -> void
  // attachments, // cb :: (tabId, attachInfo) -> void
  // removals, // cb :: (tabId, removeInfo) -> void
  // replacments, // cb :: (addedTabId, removedTabId) -> void
  // zooms, // cb :: zoomChangeInfo -> void
}
// DEPRECATED TAB EVENTS
// onSelectionChanged
// onActiveChanged
// onHighlightChanged
