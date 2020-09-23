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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
require("./style.css");
const App = () => {
    const [counter, setCounter] = react_1.useState(0);
    const [msg, setMsg] = react_1.useState("");
    react_1.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios_1.default.get('/users');
                setMsg(data);
            }
            catch (err) {
                console.log('Error in App GET /users', err);
            }
        })();
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement("h1", null, counter),
            react_1.default.createElement("button", { onClick: () => setCounter(counter + 1) }, "Press me")),
        react_1.default.createElement("h1", null, msg && msg)));
};
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi9mcm9udGVuZC9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFtRDtBQUNuRCxrREFBeUI7QUFFekIsdUJBQXFCO0FBRXJCLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRTtJQUNiLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGdCQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDbEMsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDWCxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ1IsSUFBSTtnQkFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDZjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFFL0M7UUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTyxDQUNIO1FBQ0EsdUNBQUssU0FBUyxFQUFDLEtBQUs7WUFDaEIsMENBQUssT0FBTyxDQUFNO1lBQ2xCLDBDQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxlQUFtQixDQUMvRDtRQUNGLDBDQUFLLEdBQUcsSUFBSSxHQUFHLENBQU0sQ0FDbkIsQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFBIn0=