"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./style.css");
const App = () => {
    const [counter, setCounter] = react_1.useState(0);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement("h1", null, counter),
            react_1.default.createElement("button", { onClick: () => setCounter(counter + 1) }, "Press me"))));
};
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi9mcm9udGVuZC9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF3QztBQUV4Qyx1QkFBcUI7QUFFckIsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2IsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sQ0FDSDtRQUNBLHVDQUFLLFNBQVMsRUFBQyxLQUFLO1lBQ2hCLDBDQUFLLE9BQU8sQ0FBTTtZQUNsQiwwQ0FBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsZUFBbUIsQ0FDL0QsQ0FFQSxDQUNULENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixrQkFBZSxHQUFHLENBQUEifQ==