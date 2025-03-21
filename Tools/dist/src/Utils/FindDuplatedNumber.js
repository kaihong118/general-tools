"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberHelper = /** @class */ (function () {
    function NumberHelper() {
    }
    NumberHelper.findDuplicatedNumber = function (numberArray, totalNumber) {
        var expectedSum = (totalNumber * (totalNumber + 1)) / 2;
        var actualSum = numberArray.reduce(function (sum, currentNumber) { return sum + currentNumber; });
        return actualSum - expectedSum;
    };
    return NumberHelper;
}());
exports.default = NumberHelper;
// const arrNum = Array.from({ length: 100 }, (_, i) => i + 1);
// arrNum.push(20, 30);
// console.log(findDuplicatedNumber(arrNum, 100));
// function findDuplicatedNumber(arr: number[], totalNumber: number) {
//   const expectedSum = (totalNumber * (totalNumber + 1)) / 2;
//   const actualSum = arr.reduce((sum, currentNumber) => sum + currentNumber);
//   return actualSum - expectedSum;
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZER1cGxhdGVkTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1V0aWxzL0ZpbmREdXBsYXRlZE51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFXQSxDQUFDO0lBVmUsaUNBQW9CLEdBQWxDLFVBQ0UsV0FBcUIsRUFDckIsV0FBbUI7UUFFbkIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FDbEMsVUFBQyxHQUFHLEVBQUUsYUFBYSxJQUFLLE9BQUEsR0FBRyxHQUFHLGFBQWEsRUFBbkIsQ0FBbUIsQ0FDNUMsQ0FBQztRQUNGLE9BQU8sU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQzs7QUFDRCwrREFBK0Q7QUFDL0QsdUJBQXVCO0FBQ3ZCLGtEQUFrRDtBQUVsRCxzRUFBc0U7QUFDdEUsK0RBQStEO0FBQy9ELCtFQUErRTtBQUUvRSxvQ0FBb0M7QUFDcEMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlckhlbHBlciB7XG4gIHB1YmxpYyBzdGF0aWMgZmluZER1cGxpY2F0ZWROdW1iZXIoXG4gICAgbnVtYmVyQXJyYXk6IG51bWJlcltdLFxuICAgIHRvdGFsTnVtYmVyOiBudW1iZXJcbiAgKSB7XG4gICAgY29uc3QgZXhwZWN0ZWRTdW0gPSAodG90YWxOdW1iZXIgKiAodG90YWxOdW1iZXIgKyAxKSkgLyAyO1xuICAgIGNvbnN0IGFjdHVhbFN1bSA9IG51bWJlckFycmF5LnJlZHVjZShcbiAgICAgIChzdW0sIGN1cnJlbnROdW1iZXIpID0+IHN1bSArIGN1cnJlbnROdW1iZXJcbiAgICApO1xuICAgIHJldHVybiBhY3R1YWxTdW0gLSBleHBlY3RlZFN1bTtcbiAgfVxufVxuLy8gY29uc3QgYXJyTnVtID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwIH0sIChfLCBpKSA9PiBpICsgMSk7XG4vLyBhcnJOdW0ucHVzaCgyMCwgMzApO1xuLy8gY29uc29sZS5sb2coZmluZER1cGxpY2F0ZWROdW1iZXIoYXJyTnVtLCAxMDApKTtcblxuLy8gZnVuY3Rpb24gZmluZER1cGxpY2F0ZWROdW1iZXIoYXJyOiBudW1iZXJbXSwgdG90YWxOdW1iZXI6IG51bWJlcikge1xuLy8gICBjb25zdCBleHBlY3RlZFN1bSA9ICh0b3RhbE51bWJlciAqICh0b3RhbE51bWJlciArIDEpKSAvIDI7XG4vLyAgIGNvbnN0IGFjdHVhbFN1bSA9IGFyci5yZWR1Y2UoKHN1bSwgY3VycmVudE51bWJlcikgPT4gc3VtICsgY3VycmVudE51bWJlcik7XG5cbi8vICAgcmV0dXJuIGFjdHVhbFN1bSAtIGV4cGVjdGVkU3VtO1xuLy8gfVxuIl19