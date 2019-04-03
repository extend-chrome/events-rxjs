import { fromEventPattern } from 'rxjs';

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
const fromChromeEvent = (event, selector = x => x) =>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlcyI6WyJzcmMvZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4gfSBmcm9tICdyeGpzJ1xuXG4vKipcbiAqIFVzZSBmb3IgYmFzaWMgQ2hyb21lIEV2ZW50c1xuICpcbiAqIEBwYXJhbSB7Q2hyb21lRXZlbnR9IGV2ZW50IENocm9tZSBFdmVudFxuICpcbiAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBSeEpTIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21DaHJvbWVFdmVudCA9IChldmVudCwgc2VsZWN0b3IgPSB4ID0+IHgpID0+XG4gIGZyb21FdmVudFBhdHRlcm4oXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5hZGRMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gICAgc2VsZWN0b3IsXG4gIClcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7O0FBT0EsQUFBWSxNQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDdEQsZ0JBQWdCO0lBQ2QsT0FBTyxJQUFJO01BQ1QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUM7S0FDM0I7SUFDRCxPQUFPLElBQUk7TUFDVCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBQztLQUM5QjtJQUNELFFBQVE7R0FDVDs7OzsifQ==
