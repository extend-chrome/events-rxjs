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
  resultSelector?: (...args: any[]) => T,
): Observable<T> {
  if (resultSelector) {
    return fromEventPattern(
      (handler) => {
        event.addListener(handler)
      },
      (handler) => {
        event.removeListener(handler)
      },
      resultSelector,
    )
  } else {
    return fromEventPattern(
      (handler) => {
        event.addListener(handler)
      },
      (handler) => {
        event.removeListener(handler)
      },
    )
  }
}
