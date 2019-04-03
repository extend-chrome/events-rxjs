import { fromEventPattern } from 'rxjs'

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
export const fromChromeEvent = (event, selector = x => x) =>
  fromEventPattern(
    handler => {
      event.addListener(handler)
    },
    handler => {
      event.removeListener(handler)
    },
    selector,
  )
