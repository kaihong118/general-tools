"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.toCamelCase = function (str) {
        return str
            .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
            .replace(/\s+/g, '');
    };
    StringHelper.toSnakeCase = function (str) {
        if (!str)
            return '';
        return str.trim().replace(/\s+/g, '_').toLowerCase();
    };
    return StringHelper;
}());
exports.default = StringHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1V0aWxzL1N0cmluZ0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFjQSxDQUFDO0lBYmUsd0JBQVcsR0FBekIsVUFBMEIsR0FBVztRQUNuQyxPQUFPLEdBQUc7YUFDUCxPQUFPLENBQUMscUJBQXFCLEVBQUUsVUFBVSxJQUFZLEVBQUUsS0FBYTtZQUNuRSxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9ELENBQUMsQ0FBQzthQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVhLHdCQUFXLEdBQXpCLFVBQTBCLEdBQVc7UUFDbkMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUVwQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nSGVscGVyIHtcbiAgcHVibGljIHN0YXRpYyB0b0NhbWVsQ2FzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJcbiAgICAgIC5yZXBsYWNlKC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgZnVuY3Rpb24gKHdvcmQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyB3b3JkLnRvTG93ZXJDYXNlKCkgOiB3b3JkLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJycpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0b1NuYWtlQ2FzZShzdHI6IHN0cmluZykge1xuICAgIGlmICghc3RyKSByZXR1cm4gJyc7XG5cbiAgICByZXR1cm4gc3RyLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICdfJykudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuIl19