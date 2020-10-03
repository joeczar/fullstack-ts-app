"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const modules_1 = require("./modules");
exports.rootReducer = redux_1.combineReducers({
    user: modules_1.userReducer
});
//# sourceMappingURL=index.js.map