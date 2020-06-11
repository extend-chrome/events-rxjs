import * as chrome from 'sinon-chrome'

const ChromePromise = require('chrome-promise/constructor')
const chromep = new ChromePromise({ chrome })

Object.assign(global, {
  chrome,
  chromep,
})
