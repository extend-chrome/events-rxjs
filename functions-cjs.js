'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rxjs = require('rxjs');

/**
 * Use for basic Chrome Events
 *
 * @param {ChromeEvent} event Chrome Event
 *
 * @returns {Observable} RxJS Observable
 */
const fromChromeEvent = (event, selector = x => x) =>
  rxjs.fromEventPattern(
    handler => {
      event.addListener(handler);
    },
    handler => {
      event.removeListener(handler);
    },
    selector,
  );

exports.fromChromeEvent = fromChromeEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLWNqcy5qcyIsInNvdXJjZXMiOlsic3JjL2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRXZlbnRQYXR0ZXJuIH0gZnJvbSAncnhqcydcblxuLyoqXG4gKiBVc2UgZm9yIGJhc2ljIENocm9tZSBFdmVudHNcbiAqXG4gKiBAcGFyYW0ge0Nocm9tZUV2ZW50fSBldmVudCBDaHJvbWUgRXZlbnRcbiAqXG4gKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gUnhKUyBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tQ2hyb21lRXZlbnQgPSAoZXZlbnQsIHNlbGVjdG9yID0geCA9PiB4KSA9PlxuICBmcm9tRXZlbnRQYXR0ZXJuKFxuICAgIGhhbmRsZXIgPT4ge1xuICAgICAgZXZlbnQuYWRkTGlzdGVuZXIoaGFuZGxlcilcbiAgICB9LFxuICAgIGhhbmRsZXIgPT4ge1xuICAgICAgZXZlbnQucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcilcbiAgICB9LFxuICAgIHNlbGVjdG9yLFxuICApXG4iXSwibmFtZXMiOlsiZnJvbUV2ZW50UGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7Ozs7Ozs7QUFPQSxBQUFZLE1BQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQztFQUN0REEscUJBQWdCO0lBQ2QsT0FBTyxJQUFJO01BQ1QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUM7S0FDM0I7SUFDRCxPQUFPLElBQUk7TUFDVCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBQztLQUM5QjtJQUNELFFBQVE7R0FDVDs7OzsifQ==
