export default class NumberHelper {
  public static findDuplicatedNumber(
    numberArray: number[],
    totalNumber: number
  ) {
    const expectedSum = (totalNumber * (totalNumber + 1)) / 2;
    const actualSum = numberArray.reduce(
      (sum, currentNumber) => sum + currentNumber
    );
    return actualSum - expectedSum;
  }

  /**
   *
   * @param amount Amount
   * @param decimals Decimals
   * @returns Amount in String
   */
  public static decimals(amount: string, decimals: number) {
    // Ensure the input is a valid number string
    if (!/^\d+$/.test(amount)) {
      throw new Error('Invalid amount format');
    }

    // Pad the amount with leading zeros if necessary
    while (amount.length <= decimals) {
      amount = '0' + amount;
    }

    // Add decimal point at the correct position
    const integerPart = amount.slice(0, -decimals);
    const decimalPart = amount.slice(-decimals);

    return `${integerPart}.${decimalPart}`;
  }
}
// const arrNum = Array.from({ length: 100 }, (_, i) => i + 1);
// arrNum.push(20, 30);
// console.log(findDuplicatedNumber(arrNum, 100));

// function findDuplicatedNumber(arr: number[], totalNumber: number) {
//   const expectedSum = (totalNumber * (totalNumber + 1)) / 2;
//   const actualSum = arr.reduce((sum, currentNumber) => sum + currentNumber);

//   return actualSum - expectedSum;
// }
