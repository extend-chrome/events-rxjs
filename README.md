# RxJS Observables for Chrome API events

# Install

```sh
npm i @bumble/chrome-rxjs
```

# Usage

```javascript
import { contextMenus } from 'chrome-rxjs'

contextMenus.clicks.subscribe(clickEvent => {
  console.log('click', clickEvent)
})
```
