"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var SecretGenerator = /** @class */ (function () {
    function SecretGenerator() {
    }
    SecretGenerator.generateHashedSecret = function (email, password, salt) {
        if (salt) {
            var hashedPassword = (0, crypto_1.createHmac)('sha256', password, {
                encoding: 'utf8',
            })
                .update("".concat(email).concat(salt))
                .digest('hex');
            return hashedPassword;
        }
        else {
            var hashedPassword = (0, crypto_1.createHash)('sha256')
                .update("".concat(email).concat(password))
                .digest('hex');
            return hashedPassword;
        }
    };
    return SecretGenerator;
}());
exports.default = SecretGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjcmV0R2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1V0aWxzL1NlY3JldEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnRDtBQUVoRDtJQUFBO0lBb0JBLENBQUM7SUFuQmUsb0NBQW9CLEdBQWxDLFVBQ0UsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLElBQWE7UUFFYixJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQ3BELFFBQVEsRUFBRSxNQUFNO2FBQ2pCLENBQUM7aUJBQ0MsTUFBTSxDQUFDLFVBQUcsS0FBSyxTQUFHLElBQUksQ0FBRSxDQUFDO2lCQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFNLGNBQWMsR0FBRyxJQUFBLG1CQUFVLEVBQUMsUUFBUSxDQUFDO2lCQUN4QyxNQUFNLENBQUMsVUFBRyxLQUFLLFNBQUcsUUFBUSxDQUFFLENBQUM7aUJBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhtYWMsIGNyZWF0ZUhhc2ggfSBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWNyZXRHZW5lcmF0b3Ige1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlSGFzaGVkU2VjcmV0KFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBzYWx0Pzogc3RyaW5nXG4gICkge1xuICAgIGlmIChzYWx0KSB7XG4gICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGNyZWF0ZUhtYWMoJ3NoYTI1NicsIHBhc3N3b3JkLCB7XG4gICAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICB9KVxuICAgICAgICAudXBkYXRlKGAke2VtYWlsfSR7c2FsdH1gKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKTtcbiAgICAgIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBjcmVhdGVIYXNoKCdzaGEyNTYnKVxuICAgICAgICAudXBkYXRlKGAke2VtYWlsfSR7cGFzc3dvcmR9YClcbiAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICByZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XG4gICAgfVxuICB9XG59XG4iXX0=