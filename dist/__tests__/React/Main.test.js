"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const App_1 = __importDefault(require("../../frontend/App"));
let documentBody;
describe("<App />", () => {
    beforeEach(() => {
        documentBody = react_2.render(react_1.default.createElement(App_1.default, null));
    });
    test("should display a counter with a button that says press me", async () => {
        expect(documentBody.getByText('Press me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Main.test.js.map