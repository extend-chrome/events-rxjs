import { fromChromeEvent } from './functions'

// https://developer.chrome.com/extensions/runtime#events

export const runtime = {
  // get install$() {
  //   return fromChromeEvent(chrome.runtime.onInstalled)
  // },
  get connect$() {
    return fromChromeEvent(chrome.runtime.onConnect)
  },
  get externalConnect$() {
    return fromChromeEvent(chrome.runtime.onConnectExternal)
  },
  // get externalMessage$() {
  //   return fromChromeEvent(chrome.runtime.onExternalMessage)
  // },
  // get message$() {
  //   return fromChromeEvent(chrome.runtime.onMessage)
  // },
  get nativeConnect$() {
    return fromChromeEvent(chrome.runtime.onConnectNative)
  },
  get restartRequired$() {
    return fromChromeEvent(chrome.runtime.onRestartRequired)
  },
  get startup$() {
    return fromChromeEvent(chrome.runtime.onStartup)
  },
  get suspendCancel$() {
    return fromChromeEvent(chrome.runtime.onSuspendCanceled)
  },
  get suspend$() {
    return fromChromeEvent(chrome.runtime.onSuspend)
  },
  // get updateAvailable$() {
  //   return fromChromeEvent(chrome.runtime.onUpdateAvailable)
  // },
}
