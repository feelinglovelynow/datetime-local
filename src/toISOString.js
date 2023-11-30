/**
 * Accepts a `datetime-local` input's `value` and returns a date time string format based on ISO 8601 - `YYYY-MM-DDTHH:mm:ss.sssZ`
 * @param { string } date 
 * @returns { string }
 */
export function toISOString (date) {
  if (typeof date !== 'string') throw { id: 'fln__datetime-local__invalid-date', message: 'Please pass toISOString() a string', _errorData: { date } }
  else return (new Date(date)).toISOString()
}
