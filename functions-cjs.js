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
const fromChromeEvent = (
  event,
  selector = (...x) => (x.length === 1 ? x[0] : x),
) =>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLWNqcy5qcyIsInNvdXJjZXMiOlsic3JjL2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRXZlbnRQYXR0ZXJuIH0gZnJvbSAncnhqcydcblxuLyoqXG4gKiBVc2UgZm9yIGJhc2ljIENocm9tZSBFdmVudHNcbiAqXG4gKiBAcGFyYW0ge0Nocm9tZUV2ZW50fSBldmVudCBDaHJvbWUgRXZlbnRcbiAqXG4gKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gUnhKUyBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tQ2hyb21lRXZlbnQgPSAoXG4gIGV2ZW50LFxuICBzZWxlY3RvciA9ICguLi54KSA9PiAoeC5sZW5ndGggPT09IDEgPyB4WzBdIDogeCksXG4pID0+XG4gIGZyb21FdmVudFBhdHRlcm4oXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5hZGRMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gICAgaGFuZGxlciA9PiB7XG4gICAgICBldmVudC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0sXG4gICAgc2VsZWN0b3IsXG4gIClcbiJdLCJuYW1lcyI6WyJmcm9tRXZlbnRQYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7Ozs7OztBQU9BLEFBQVksTUFBQyxlQUFlLEdBQUc7RUFDN0IsS0FBSztFQUNMLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRWhEQSxxQkFBZ0I7SUFDZCxPQUFPLElBQUk7TUFDVCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQztLQUMzQjtJQUNELE9BQU8sSUFBSTtNQUNULEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFDO0tBQzlCO0lBQ0QsUUFBUTtHQUNUOzs7OyJ9
