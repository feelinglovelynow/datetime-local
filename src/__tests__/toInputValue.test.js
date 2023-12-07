import { toInputValue } from '../toInputValue.js'
import { describe, test, expect } from '@jest/globals'


describe('toInputValue()', () => {
  test('throws if date is not a Date', () => {
    const options = [ '', 9, null, undefined, new Date('date') ]

    for (const date of options) {
      let error

      try {
        // @ts-ignore
        toInputValue(date)
      } catch (e) { error = e }

      expect(error).toEqual({ id: 'fln__datetime-local__invalid-date', message: 'Please pass toInputValue() a valid Date object', _errorData: { date } })
    }
  })


  test('returns', () => {
    const d1 = new Date()
    d1.setDate(d1.getDate() - 7) // now - 7 days

    const d2 = new Date()
    const d3 = (new Date(d2.getTime() + (3 * 60000))) // now + 3 minutes
    const options = [ d1, d2, d3 ]

    /**
     * @param { Date } date 
     * @returns { string }
    */
    function _toInputValue(date) {
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')

      return `${ year }-${ month }-${ day }T${ hours }:${ minutes }`
    }

    for (const date of options) {
      expect(toInputValue(date)).toEqual(_toInputValue(date))
    }
  })
})
