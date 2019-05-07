import { fromEventPattern } from 'rxjs';

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
const fromChromeEvent = (
  event,
  selector = (...x) => (x.length === 1 ? x[0] : x),
) =>
  fromEventPattern(
    handler => {
      event.addListener(handler);
    },
    handler => {
      event.removeListener(handler);
    },
    selector,
  );

export { fromChromeEvent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlcyI6WyJzcmMvZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4gfSBmcm9tICdyeGpzJ1xuXG4vKipcbiAqIFVzZSBmb3IgYmFzaWMgQ2hyb21lIEV2ZW50c1xuICpcbiAqIEBwYXJhbSB7Q2hyb21lRXZlbnR9IGV2ZW50IENocm9tZSBFdmVudFxuICpcbiAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBSeEpTIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21DaHJvbWVFdmVudCA9IChcbiAgZXZlbnQsXG4gIHNlbGVjdG9yID0gKC4uLngpID0+ICh4Lmxlbmd0aCA9PT0gMSA/IHhbMF0gOiB4KSxcbikgPT5cbiAgZnJvbUV2ZW50UGF0dGVybihcbiAgICBoYW5kbGVyID0+IHtcbiAgICAgIGV2ZW50LmFkZExpc3RlbmVyKGhhbmRsZXIpXG4gICAgfSxcbiAgICBoYW5kbGVyID0+IHtcbiAgICAgIGV2ZW50LnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpXG4gICAgfSxcbiAgICBzZWxlY3RvcixcbiAgKVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7Ozs7QUFPQSxBQUFZLE1BQUMsZUFBZSxHQUFHO0VBQzdCLEtBQUs7RUFDTCxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztFQUVoRCxnQkFBZ0I7SUFDZCxPQUFPLElBQUk7TUFDVCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQztLQUMzQjtJQUNELE9BQU8sSUFBSTtNQUNULEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFDO0tBQzlCO0lBQ0QsUUFBUTtHQUNUOzs7OyJ9
