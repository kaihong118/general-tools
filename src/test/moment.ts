/**
 * Moment Framework Testing
 */

import moment from 'moment-timezone';

console.log(moment(1745311712555).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'));

// console.log(`${moment().utc()}\n`);
// console.log(`${moment().utc(true)}\n`);
// console.log(`${moment().tz('America/Los_Angeles')}\n`);
