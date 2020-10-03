"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
const typedActions_1 = require("./typedActions");
const initialState = { username: null };
const login = (username) => {
    return typedActions_1.createTypedAction('user/LOGIN', username);
};
const logout = () => {
    return typedActions_1.createTypedAction('user/LOGOUT');
};
function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/LOGIN':
            return { username: action.payload };
        case 'user/LOGOUT':
            return { username: null };
        default:
            return state;
    }
}
exports.userReducer = userReducer;
//# sourceMappingURL=user.js.map