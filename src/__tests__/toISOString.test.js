import { toISOString } from '../toISOString.js'
import { toInputValue } from '../toInputValue.js'
import { describe, test, expect } from '@jest/globals'


describe('toISOString()', () => {
  describe('throws if date is not', () => {
    test('a populated string', () => {
      const options = [ '', 9, null, undefined ]

      for (const date of options) {
        let error

        try {
          // @ts-ignore
          toISOString(date)
        } catch (e) { error = e }

        expect(error).toEqual({ id: 'fln__datetime-local__empty-date', message: 'Please pass toISOString() a not empty string', _errorData: { date } })
      }
    })


    test('an valid string', () => {
      const options = [ 'date', 'chris', 'mom' ]

      for (const date of options) {
        let error

        try { toISOString(date) }
        catch (e) { error = e }

        expect(error).toEqual({ id: 'fln__datetime-local__invalid-date', message: 'Please pass toISOString() a valid date string', _errorData: { date } })
      }
    })
  })


  test('returns', () => {
    const d = new Date()
    d.setDate(d.getDate() - 7) // now - 7 days

    const options = [
      toInputValue(d),
      toInputValue(new Date()),
      toInputValue(new Date((new Date()).getTime() + (3 * 60000))) // now + 3 minutes
    ]

    for (const date of options) {
      expect(toISOString(date)).toEqual((new Date(date)).toISOString())
    }
  })
})
