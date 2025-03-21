/**
 * Moment Framework Testing
 */

import moment from 'moment';

const dateTime = moment.utc().add(15 * -1, 'minute');

const dateTime1 = moment.utc();
console.log(dateTime);
console.log(dateTime1);
console.log(dateTime1.diff(dateTime, 'minute'));
