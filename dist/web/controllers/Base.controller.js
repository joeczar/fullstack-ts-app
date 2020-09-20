"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBase = void 0;
var typeorm_1 = require("typeorm");
var ApiBase = /** @class */ (function () {
    function ApiBase() {
        this.manager = typeorm_1.getConnectionManager().get();
    }
    return ApiBase;
}());
exports.ApiBase = ApiBase;
//# sourceMappingURL=Base.controller.js.map