"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const App_1 = __importDefault(require("../../web/frontend/App"));
let documentBody;
describe("<App />", () => {
    beforeEach(() => {
        documentBody = react_2.render(react_1.default.createElement(App_1.default, null));
    });
    test("should display a counter with a button that says press me", async () => {
        expect(documentBody.getByText('Press me')).toBeInTheDocument();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL19fdGVzdHNfXy9SZWFjdC9NYWluLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGtEQUErRDtBQUUvRCxpRUFBeUM7QUFFekMsSUFBSSxZQUEwQixDQUFDO0FBRS9CLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxZQUFZLEdBQUcsY0FBTSxDQUFDLDhCQUFDLGFBQUcsT0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsMkRBQTJELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==