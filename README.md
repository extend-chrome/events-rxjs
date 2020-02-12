<p align="center">
  <a href="http://bit.ly/2QG8bU4" rel="noopener">
  <img width=200px height=200px src="https://i.imgur.com/FmuqfEi.png" alt="@bumble/chrome-rxjs logo"></a>
</p>

<h3 align="center">@bumble/chrome-rxjs</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@bumble/chrome-rxjs.svg)](http://bit.ly/2s7rsnl)
[![GitHub last commit](https://img.shields.io/github/last-commit/bumble-org/chrome-rxjs.svg)](http://bit.ly/2QG8bU4)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

</div>

<div align="center">

[![Fiverr: We make Chrome extensions](https://img.shields.io/badge/Fiverr%20-We%20make%20Chrome%20extensions-brightgreen.svg)](http://bit.ly/37mZsfA)
[![ko-fi](https://img.shields.io/badge/ko--fi-Buy%20me%20a%20coffee-ff5d5b)](http://bit.ly/2qmaQYB)

</div>

---

# RxJS Observables for Chrome API events

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)

## Getting started <a name = "getting_started"></a>

You will need to use a bundler like [Rollup](https://rollupjs.org/guide/en/), Parcel, or Webpack to include this library in the build of Chrome extension.

See [`rollup-plugin-chrome-extension`](http://bit.ly/35hLMR8) for an easy way use Rollup to build your Chrome extension!

### Installation

```sh
npm i @bumble/chrome-rxjs
```

## Usage <a name = "usage"></a>

```javascript
import { contextMenus } from 'chrome-rxjs'

contextMenus.clicks.subscribe(clickEvent => {
  console.log('click', clickEvent)
})
```
