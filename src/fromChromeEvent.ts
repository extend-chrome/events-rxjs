import { fromEventPattern, Observable } from 'rxjs'

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
export function fromChromeEvent<T extends any[]>(
  event: chrome.events.Event<Function>,
): Observable<T> {
  return fromEventPattern(
    (handler) => {
      event.addListener(handler)
    },
    (handler) => {
      event.removeListener(handler)
    },
    (...args) => args as T,
  )
}
