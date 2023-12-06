# 🕉 @feelinglovelynow/datetime-local


## 💎 Install
```bash
pnpm add @feelinglovelynow/datetime-local
```


## 🤓 Unit Tests
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg?style=flat)


## 🙏 Description
* First function accepts a `Date` object and returns a string that may be used as a `value` in an `input` that has a type of `datetime-local` - `YYYY-MM-DDTHH:mm`
* Second function accepts a `datetime-local` input's `value` and returns a date time string format based on ISO 8601 - `YYYY-MM-DDTHH:mm:ss.sssZ`


## 💚 toInputValue()
* Accepts a `Date` object and returns a string that may be used as a `value` in an `input` that has a type of `datetime-local` - `YYYY-MM-DDTHH:mm`
* `toInputValue(date: Date): string`
* Example:
```ts
import { toInputValue } from '@feelinglovelynow/datetime-local'

const date = new Date((new Date()).getTime() + (3 * 60000)) // now + 3 minutes
const value = toInputValue(date)
```
```html
<input bind:value={ value } type="datetime-local">
```
* 🔥 Errors we may throw
```ts
if (!(date instanceof Date) || date.toString() === 'Invalid Date') throw { id: 'fln__datetime-local__invalid-date', message: 'Please pass toInputValue() a valid Date object', _errorData: { date } }
```


## 💛 toISOString()
* Accepts a `datetime-local` input's `value` and returns a date time string format based on ISO 8601 - `YYYY-MM-DDTHH:mm:ss.sssZ`
* `toISOString(date: string): string`
* Example:
```ts
import { toInputValue, toISOString } from '@feelinglovelynow/datetime-local'

const date = new Date()
date.setDate(date.getDate() - 7) // now - 7 days
const iso = toISOString(toInputValue(date)) // ready for db insert
```
* 🔥 Errors we may throw
```ts
if (!date || typeof date !== 'string') throw { id: 'fln__datetime-local__empty-date', message: 'Please pass toISOString() a not empty string', _errorData: { date } }

if (date.toString() === 'Invalid Date') throw { id: 'fln__datetime-local__invalid-date', message: 'Please pass toISOString() a valid date string', _errorData: { date } }
```


## 🎁 All Our Packages
1. @feelinglovelynow/datetime-local: [NPM](https://www.npmjs.com/package/@feelinglovelynow/datetime-local) ⋅ [Github](https://github.com/feelinglovelynow/datetime-local)
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backwards) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
