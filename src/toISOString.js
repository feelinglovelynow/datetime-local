/**
 * Accepts a `datetime-local` input's `value` and returns a date time string format based on ISO 8601 - `YYYY-MM-DDTHH:mm:ss.sssZ`
 * @param { string } date 
 * @returns { string }
*/
export function toISOString (date) {
  if (!date || typeof date !== 'string') throw { id: 'fln__datetime-local__empty-date', message: 'Please pass toISOString() a not empty string', _errorData: { date } }
  else {
    const d = new Date(date)

    if (d.toString() === 'Invalid Date') throw { id: 'fln__datetime-local__invalid-date', message: 'Please pass toISOString() a valid date string', _errorData: { date } }
    else return d.toISOString()
  }
}
