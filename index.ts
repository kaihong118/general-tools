import BigNumber from 'bignumber.js';

import ArrayHelper from './src/utils/ArrayHelper';

const totalAmount = 2000.1251251251;

const result = BigNumber(totalAmount).toFormat(2).toString();
console.log(result);

///////////////////////////////

// const array = [
//   { name: 'charlie', age: '28', role: 'manager', programName: 'B' },
//   { name: 'louis', age: '33', role: 'developer', programName: 'A' },
//   { name: 'lucas', age: '31', role: 'developer', programName: 'A' },
//   { name: 'patrick', age: '30', role: 'developer', programName: 'A' },
// ];
// const sortedArray = ArrayHelper.sortByKey(array, 'programName');
// console.table(sortedArray);
