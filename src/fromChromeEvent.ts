import { fromEventPattern, Observable } from 'rxjs'

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
export function fromChromeEvent<T extends any[]>(
  event: chrome.events.Event<(...args: T) => void>,
): Observable<T> {
  return fromEventPattern<T>(
    (handler) => {
      event.addListener(handler)
    },
    (handler) => {
      event.removeListener(handler)
    },
    (...args) => args as T,
  )
}
