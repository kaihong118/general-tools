/**
 * Moment Framework Testing
 */

import moment from 'moment-timezone';

const dateTime = moment
  .tz(1747196562 * 1000, 'Asia/Hong_Kong')
  .format('YYYY-MM-DD HH:mm:ss (z)');

console.log(dateTime);
