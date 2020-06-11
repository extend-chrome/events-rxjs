<p align="center">
  <a href="http://bit.ly/2QG8bU4" rel="noopener">
  <img width=200px height=200px src="https://i.imgur.com/FmuqfEi.png" alt="@extend-chrome/events-rxjs logo"></a>
</p>

<h3 align="center">@extend-chrome/events-rxjs</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@extend-chrome/events-rxjs.svg)](http://bit.ly/2s7rsnl)
[![GitHub last commit](https://img.shields.io/github/last-commit/extend-chrome/events-rxjs.svg)](http://bit.ly/2QG8bU4)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

</div>

<div align="center">

[![ko-fi](https://img.shields.io/badge/Buy%20us%20a%20tea-ko--fi-29ABE0)](https://ko-fi.com/jacksteam)
[![Chrome Extension Tutorials on YouTube](https://img.shields.io/badge/Chrome%20Extension%20Tutorials-YouTube-c4302b.svg)](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg)

<!-- [![Fiverr: We make Chrome extensions](https://img.shields.io/badge/We%20make%20Chrome%20extensions-Fiverr-brightgreen.svg)](https://www.fiverr.com/jacksteam) -->

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
npm i @extend-chrome/events-rxjs
```

## Usage <a name = "usage"></a>

```javascript
import { contextMenus } from '@extend-chrome/events-rxjs'

contextMenus.clicks.subscribe(clickEvent => {
  console.log('click', clickEvent)
})
```
