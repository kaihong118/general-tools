"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var TimeStampHelper = /** @class */ (function () {
    function TimeStampHelper() {
    }
    TimeStampHelper.testing = function (logger) {
        var timeBefore = (0, moment_timezone_1.default)().format('YYYY-MM-DD HH:mm:ss');
        logger.info(timeBefore);
        var timeAfter = (0, moment_timezone_1.default)().utcOffset('+0800').format('YYYY-MM-DD HH:mm:ss');
        logger.info(timeAfter);
        var timestamp = 1720678873167;
        var time = moment_timezone_1.default
            .tz(timestamp, 'Asia/Hong_Kong')
            .format('YYYY-MM-DD HH:mm:ss (z)');
        logger.info(time);
    };
    return TimeStampHelper;
}());
exports.default = TimeStampHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVN0YW1wSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1V0aWxzL1RpbWVTdGFtcEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9FQUFxQztBQUdyQztJQUFBO0lBY0EsQ0FBQztJQWJlLHVCQUFPLEdBQXJCLFVBQXNCLE1BQXNCO1FBQzFDLElBQU0sVUFBVSxHQUFHLElBQUEseUJBQU0sR0FBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsSUFBTSxTQUFTLEdBQUcsSUFBQSx5QkFBTSxHQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkIsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFHLHlCQUFNO2FBQ2hCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7YUFDL0IsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3RhbXBIZWxwZXIge1xuICBwdWJsaWMgc3RhdGljIHRlc3RpbmcobG9nZ2VyOiB3aW5zdG9uLkxvZ2dlcikge1xuICAgIGNvbnN0IHRpbWVCZWZvcmUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICBsb2dnZXIuaW5mbyh0aW1lQmVmb3JlKTtcblxuICAgIGNvbnN0IHRpbWVBZnRlciA9IG1vbWVudCgpLnV0Y09mZnNldCgnKzA4MDAnKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICBsb2dnZXIuaW5mbyh0aW1lQWZ0ZXIpO1xuXG4gICAgY29uc3QgdGltZXN0YW1wID0gMTcyMDY3ODg3MzE2NztcbiAgICBjb25zdCB0aW1lID0gbW9tZW50XG4gICAgICAudHoodGltZXN0YW1wLCAnQXNpYS9Ib25nX0tvbmcnKVxuICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcyAoeiknKTtcbiAgICBsb2dnZXIuaW5mbyh0aW1lKTtcbiAgfVxufVxuIl19