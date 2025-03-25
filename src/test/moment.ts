/**
 * Moment Framework Testing
 */

import moment from 'moment-timezone';

console.log(`${moment().utc()}\n`);
console.log(`${moment().utc(true)}\n`);
console.log(`${moment().tz('America/Los_Angeles')}\n`);
