"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const redux_2 = require("./redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const home_1 = require("./components/home");
const store = redux_1.createStore(redux_2.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
let elem;
let isLoggedIn = location.pathname !== "/welcome";
// let isLoggedIn = true;
if (isLoggedIn) {
    elem = (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(App_1.default, null)));
}
else {
    elem = react_1.default.createElement(home_1.Home, null); //; <Welcome />
}
react_dom_1.default.render(elem, document.getElementById('root'));
//# sourceMappingURL=main.js.map