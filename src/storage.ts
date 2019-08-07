import { fromChromeEvent } from './fromChromeEvent'
import { filter, map } from 'rxjs/operators'

const createArea = (areaName: string) => ({
  /**
   * Observable from `chrome.storage.onClicked` for this area
   *
   * Emits when this storage area changes.
   */
  get changeStream() {
    return fromChromeEvent<
      [{ [key: string]: chrome.storage.StorageChange }, string]
    >(chrome.storage.onChanged).pipe(
      filter(([, area]) => area === areaName),
      map(([changes]) => changes),
    )
  },
})

/**
 * Events for each `chrome.storage` area and all areas
 *
 * https://developer.chrome.com/extensions/storage#events
 */
export const storage = {
  /**
   * Observable from `chrome.storage.onChanged`
   *
   * Emits when any storage area changes.
   *
   * https://developer.chrome.com/extensions/storage#event-onChanged
   */
  get changeStream() {
    return fromChromeEvent<
      [{ [key: string]: chrome.storage.StorageChange }, string]
    >(chrome.storage.onChanged)
  },
  /**
   * Contains an Observable for changes in `chrome.storage.sync`
   *
   * https://developer.chrome.com/extensions/storage#event-onChanged
   */
  sync: createArea('sync'),
  /**
   * Contains an Observable for changes in `chrome.storage.local`
   *
   * https://developer.chrome.com/extensions/storage#event-onChanged
   */
  local: createArea('local'),
  /**
   * Contains an Observable for changes in `chrome.storage.managed`
   *
   * https://developer.chrome.com/extensions/storage#event-onChanged
   */
  managed: createArea('managed'),
}
