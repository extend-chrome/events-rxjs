import * as chrome from 'sinon-chrome'
import { fromChromeEvent } from '../../src/fromChromeEvent'

afterEach(() => {
  chrome.reset()
})

it('should emit value', (done) => {
  expect.assertions(1)

  const tab = { id: 1234 }
  const action = fromChromeEvent(chrome.browserAction.onClicked)

  action.subscribe({
    next: (t) => {
      expect(t).toBe(tab)
      done()
    },
  })

  chrome.browserAction.onClicked.triggerAsync(tab)
})
