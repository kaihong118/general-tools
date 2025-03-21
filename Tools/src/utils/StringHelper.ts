const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const numbers = '0123456789';

export default class StringHelper {
  // public static toCamelCase(str: string) {
  //   return str
  //     .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word: string, index: number) {
  //       return index === 0 ? word.toLowerCase() : word.toUpperCase();
  //     })
  //     .replace(/\s+/g, '');
  // }

  // public static toSnakeCase(str: string) {
  //   return str.trim().replace(/\s+/g, '_').toLowerCase();
  // }

  // public static toSpace(str: string) {
  //   return str
  //     .replace(/([A-Z])/g, ' $1')
  //     .trim()
  //     .toLowerCase();
  // }

  /**
   * Function of convert camel case to snake case
   * @param str String
   * @returns String
   */
  public static camelToSnake(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  /**
   * Function of convert camel case to space-separated case
   * @param str String
   * @returns String
   */
  public static camelToSpace(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }

  /**
   * Function of convert snake case to camel case
   * @param str String
   * @returns String
   */
  public static snakeToCamel(str: string) {
    return str
      .toLowerCase()
      .replace(/(_\w)/g, (match) => match[1].toUpperCase());
  }

  /**
   * Function of convert snake case to space-separated case
   * @param str String
   * @returns String
   */
  public static snakeToSpace(str: string) {
    return str.replace(/_/g, ' ');
  }

  /**
   * Function of convert space-separated case to camel case
   * @param str String
   * @returns String
   */
  public static spaceToCamel(str: string) {
    return str
      .split(' ')
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  }

  /**
   * Function of convert space-separated case to snake case
   * @param str String
   * @returns String
   */
  public static spaceToSnake(str: string) {
    return str.replace(/\s+/g, '_').toLowerCase();
  }

  /**
   * Generate random string [A-Z]+[a-z]+[0-9]+
   * @param length length of Random String
   * @returns Random String
   */
  static generateRandomString(length: number): string {
    let result = '';
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return result;
  }

  /**
   * Generate zero string with number.
   * e.g. input: 4 => '0000'
   * @param n number of zero
   * @returns Zero number string
   */
  private static generateNumberOfZero(n: number): string {
    let result = '';
    let count = 0;
    while (count < n) {
      result += '0';
      count++;
    }
    return result;
  }

  /**
   * Check is name in English valid
   * - Restriction for First Name and Last Name in English:
   * - 1. only accept “ “, “.” and “,” special character
   * - 2. throw error (3034) if the name is invalid:
   *      - “(only allow A-Z, space and special character “.” or “,”)”
   *      - “(只允許A-Z，空格及特殊字元“.” 或 “,”)”
   * @param name number of carry
   * @param fieldName fieldName
   */
  static checkIsNameValid(name: string, fieldName?: string) {
    if (name.match(/^([.]*[,]*[-]*[ ]*\s*[A-Z]*)+$/g) == null) {
      console.error(`Invalid Name Error - ${fieldName}`);
    }
  }

  /**
   * Calculate carry n number of decimal of float string
   * - Using this function to avoid floating point precision error
   * - Mathematically equal to decimalString * (10 ^ carryNumber)
   * @param decimalString Decimal String
   * @param carryNumber number of carry
   * @returns Random Number String
   */
  static carryFloatToInt(
    decimalString: string,
    carryNumber: number
  ): string | null {
    const re = /^\d*\.?\d*$/;
    const valid = re.test(decimalString);
    if (!valid) {
      return null;
    }
    const splitedDecimalString = decimalString.split('.');
    if (splitedDecimalString.length == 1 || carryNumber <= 0) {
      return decimalString + this.generateNumberOfZero(carryNumber);
    }

    if (splitedDecimalString[1].length == carryNumber) {
      return splitedDecimalString.join('');
    }

    if (splitedDecimalString[1].length < carryNumber) {
      return (
        splitedDecimalString[0] +
        splitedDecimalString[1] +
        this.generateNumberOfZero(carryNumber - splitedDecimalString[1].length)
      );
    }

    return (
      splitedDecimalString[0] +
      splitedDecimalString[1].substring(0, carryNumber)
    );
  }
}
