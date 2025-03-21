"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
// // import SecretGenerator from './Utils/SecretGenerator';
// // import TimeStampHelper from './Utils/TimeStampHelper';
// // import StringHelper from './Utils/StringHelper';
var FindDuplatedNumber_1 = __importDefault(require("./src/Utils/FindDuplatedNumber"));
var logger = winston_1.default.createLogger({
    level: 'info',
    transports: [new winston_1.default.transports.Console()],
});
var arrNum = Array.from({ length: 100 }, function (_, i) { return i + 1; });
arrNum.push(20, 30);
var data = FindDuplatedNumber_1.default.findDuplicatedNumber(arrNum, 100);
logger.info(data);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUM5Qiw0REFBNEQ7QUFDNUQsNERBQTREO0FBQzVELHNEQUFzRDtBQUN0RCxzRkFBMEQ7QUFFMUQsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLENBQUM7SUFDbEMsS0FBSyxFQUFFLE1BQU07SUFDYixVQUFVLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQy9DLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwQixJQUFNLElBQUksR0FBRyw0QkFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG4vLyAvLyBpbXBvcnQgU2VjcmV0R2VuZXJhdG9yIGZyb20gJy4vVXRpbHMvU2VjcmV0R2VuZXJhdG9yJztcbi8vIC8vIGltcG9ydCBUaW1lU3RhbXBIZWxwZXIgZnJvbSAnLi9VdGlscy9UaW1lU3RhbXBIZWxwZXInO1xuLy8gLy8gaW1wb3J0IFN0cmluZ0hlbHBlciBmcm9tICcuL1V0aWxzL1N0cmluZ0hlbHBlcic7XG5pbXBvcnQgTnVtYmVySGVscGVyIGZyb20gJy4vc3JjL1V0aWxzL0ZpbmREdXBsYXRlZE51bWJlcic7XG5cbmNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6ICdpbmZvJyxcbiAgdHJhbnNwb3J0czogW25ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSgpXSxcbn0pO1xuXG5jb25zdCBhcnJOdW0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAgfSwgKF8sIGkpID0+IGkgKyAxKTtcbmFyck51bS5wdXNoKDIwLCAzMCk7XG5jb25zdCBkYXRhID0gTnVtYmVySGVscGVyLmZpbmREdXBsaWNhdGVkTnVtYmVyKGFyck51bSwgMTAwKTtcbmxvZ2dlci5pbmZvKGRhdGEpO1xuIl19