import * as chrome from 'sinon-chrome'

const ChromePromise = require('chrome-promise/constructor')
const chromep = new ChromePromise({ chrome })

// Jest's jsdom does not include window.crypto
const nodeCrypto = require('crypto')

Object.assign(global, {
  chrome,
  chromep,
  crypto: {
    getRandomValues: function (buffer: Uint8Array) {
      return nodeCrypto.randomFillSync(buffer)
    },
  },
})
