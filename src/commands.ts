import { fromChromeEvent } from './fromChromeEvent'

/**
 * Events for `chrome.commands`
 *
 * https://developer.chrome.com/extensions/commands#event-onCommand
 */

export const commands = {
  // TODO: add commandStream

  /**
   * Observable from `chrome.commands.onCommand`
   *
   * Fired when a registered command is activated using a keyboard shortcut.
   *
   * https://developer.chrome.com/extensions/commands#event-onCommand
   */
  get commandStream() {
    return fromChromeEvent<[string]>(chrome.commands.onCommand)
  },
}
