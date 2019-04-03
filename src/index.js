/* ============================================ */
/*            CHROME API OBSERVABLES            */
/* ============================================ */

import { fromChromeEvent } from './functions'

/* ---------- single event namespaces --------- */

// https://developer.chrome.com/extensions/contextMenus#events
export const contextMenus = {
  clicks: () => fromChromeEvent(chrome.contextMenus.onClicked),
}

// https://developer.chrome.com/extensions/alarms#events
export const alarms = {
  alarms: () => fromChromeEvent(chrome.alarms.onAlarm),
}

// https://developer.chrome.com/extensions/browserAction#events
export const browserAction = {
  clicks: () => fromChromeEvent(chrome.browserAction.onClicked),
}

// https://developer.chrome.com/extensions/proxy#events
export const proxy = {
  // proxyErrors, // cb :: details -> void
}

/* --------- multiple event namespaces -------- */

// https://developer.chrome.com/extensions/notifications#events
export const notifications = {
  closes: () => fromChromeEvent(chrome.notifications.onClosed),
  clicks: () => fromChromeEvent(chrome.notifications.onClicked),
  buttonClicks: () =>
    fromChromeEvent(chrome.notifications.onButtonClicked),
  //Chrome OS only
  permissionLevelChanges: () =>
    fromChromeEvent(
      chrome.notifications.onPermissionLevelChanged,
    ),
}
// DEPRECATED NOTIFICATION EVENTS
// onShowSettings

// https://developer.chrome.com/extensions/runtime#events
export const runtime = {
  // startups,
  installs: () => fromChromeEvent(chrome.runtime.onInstalled),
  // suspends,
  // suspendCancels,
  // updateAvailables,
  // connects,
  // externalConnects,
  // nativeConnects,
  // messages,
  // externalMessages,
  // restartRequireds,
}
// DEPRECATED RUNTIME EVENTS
// onBrowserUpdateAvailable

// Storage has one event for all storage areas: divide?
// https://developer.chrome.com/extensions/storage#events
export const storage = {
  all: {
    // changes,
  },
  sync: {
    // changes, // cb :: (changes:object, areaName:string) -> void
  },
  local: {
    // changes, // cb :: (changes:object, areaName:string) -> void
  },
  managed: {
    // changes, // cb :: (changes:object, areaName:string) -> void
  },
}

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
