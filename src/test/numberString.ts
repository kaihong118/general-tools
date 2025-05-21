import StringHelper from '../utils/StringHelper';

const amount = '1434567800000000000000000';
const decimal = 18;

const formattedAmount = StringHelper.FormatDecimalString(amount, decimal);
console.log(formattedAmount);
