import { fromChromeEvent } from './fromChromeEvent'

// https://developer.chrome.com/extensions/runtime#events

export const runtime = {
  get installStream() {
    return fromChromeEvent<[chrome.runtime.InstalledDetails]>(
      chrome.runtime.onInstalled,
    )
  },
  get connectStream() {
    return fromChromeEvent<[chrome.runtime.Port]>(
      chrome.runtime.onConnect,
    )
  },
  get externalConnectStream() {
    return fromChromeEvent<[chrome.runtime.Port]>(
      chrome.runtime.onConnectExternal,
    )
  },
  // get externalMessageStream() {
  //   return fromChromeEvent(chrome.runtime.onExternalMessage)
  // },
  // Won't support message streams
  // get messageStream() {
  //   return fromChromeEvent(chrome.runtime.onMessage)
  // },
  //  Only available in the development channel
  // get nativeConnectStream() {
  //   return fromChromeEvent(chrome.runtime.onConnectNative)
  // },
  get restartRequiredStream() {
    return fromChromeEvent<[string]>(
      chrome.runtime.onRestartRequired,
    )
  },
  get startupStream() {
    return fromChromeEvent<[]>(chrome.runtime.onStartup)
  },
  get suspendCancelStream() {
    return fromChromeEvent<[]>(chrome.runtime.onSuspendCanceled)
  },
  get suspendStream() {
    return fromChromeEvent<[]>(chrome.runtime.onSuspend)
  },
  // get updateAvailableStream() {
  //   return fromChromeEvent(chrome.runtime.onUpdateAvailable)
  // },
}
