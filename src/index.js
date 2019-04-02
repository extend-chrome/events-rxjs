import { fromChromeEvent } from './chrome-rx'

/* ============================================ */
/*            CHROME API OBSERVABLES            */
/* ============================================ */

export const contextMenus = {
  clicks: fromChromeEvent(chrome.contextMenus.onClicked),
}

export const alarms = {
  alarms: fromChromeEvent(chrome.alarms.onAlarm),
}

export const runtime = {
  installs: fromChromeEvent(chrome.runtime.onInstalled),
}

export { fromChromeEvent }
