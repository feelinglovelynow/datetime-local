/**
 * Accepts a `Date` object and returns a string that may be used as a `value` in an `input` that has a type of `datetime-local` - `YYYY-MM-DDTHH:mm`
 * @param { Date } date 
 * @returns { string }
 */
export function toInputValue (date) {
  if (!(date instanceof Date) || date.toString() === 'Invalid Date') throw { id: 'fln__datetime-local__invalid-date', message: 'Please pass toInputValue() a valid Date object', _errorData: { date } }
  else {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    return `${ year }-${ month }-${ day }T${ hours }:${ minutes }`
  }
}
