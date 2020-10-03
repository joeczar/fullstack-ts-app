"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
exports.Home = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Home")));
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.Home);
//# sourceMappingURL=home.js.map