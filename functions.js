import { fromEventPattern } from 'rxjs';

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
const fromChromeEvent = event =>
  fromEventPattern(
    handler => {
      event.addListener(handler);
    },
    handler => {
      event.removeListener(handler);
    },
  );

export { fromChromeEvent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlcyI6WyJzcmMvZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4gfSBmcm9tICdyeGpzJ1xuXG4vKipcbiAqIFVzZSBmb3IgYmFzaWMgQ2hyb21lIEV2ZW50c1xuICpcbiAqIEBwYXJhbSB7Q2hyb21lRXZlbnR9IGV2ZW50IENocm9tZSBFdmVudFxuICpcbiAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBSeEpTIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21DaHJvbWVFdmVudCA9IGV2ZW50ID0+XG4gIGZyb21FdmVudFBhdHRlcm4oXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5hZGRMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gIClcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7O0FBT0EsQUFBWSxNQUFDLGVBQWUsR0FBRyxLQUFLO0VBQ2xDLGdCQUFnQjtJQUNkLE9BQU8sSUFBSTtNQUNULEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDO0tBQzNCO0lBQ0QsT0FBTyxJQUFJO01BQ1QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUM7S0FDOUI7R0FDRjs7OzsifQ==
