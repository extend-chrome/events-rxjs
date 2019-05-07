import { fromChromeEvent } from './functions'
import { filter, map } from 'rxjs/operators'

// Storage has one event for all storage areas: divide?
// https://developer.chrome.com/extensions/storage#events
export const storage = {
  all: {
    // changes,
    get change$() {
      return fromChromeEvent(chrome.storage.onChanged)
    },
  },
  sync: {
    // change$, // cb :: (changes:object, areaName:string) -> void
    get change$() {
      return fromChromeEvent(chrome.storage.onChanged).pipe(
        filter(([, area]) => area === 'sync'),
        map(([changes]) => changes),
      )
    },
  },
  local: {
    // change$, // cb :: (changes:object, areaName:string) -> void
    get change$() {
      return fromChromeEvent(chrome.storage.onChanged).pipe(
        filter(([, area]) => area === 'local'),
        map(([changes]) => changes),
      )
    },
  },
  managed: {
    // changes, // cb :: (changes:object, areaName:string) -> void
    get change$() {
      return fromChromeEvent(chrome.storage.onChanged).pipe(
        filter(([, area]) => area === 'managed'),
        map(([changes]) => changes),
      )
    },
  },
}
