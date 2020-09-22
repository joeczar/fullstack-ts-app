"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function LoginForm(props) {
    const [username, setUsername] = react_1.default.useState("");
    const [password, setPassword] = react_1.default.useState("");
    const [remember, setRemember] = react_1.default.useState(props.shouldRemember);
    const handleUsernameChange = (e) => {
        const { value } = e.target;
        setUsername(value);
        props.onUsernameChange(value);
    };
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        props.onPasswordChange(value);
    };
    const handleRememberChange = (e) => {
        const { checked } = e.target;
        setRemember(checked);
        props.onRememberChange(checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(username, password);
    };
    return (react_1.default.createElement("form", { "data-testid": "login-form", onSubmit: handleSubmit },
        react_1.default.createElement("label", { htmlFor: "username" }, "Username:"),
        react_1.default.createElement("input", { "data-testid": "username", type: "text", name: "username", value: username, onChange: handleUsernameChange }),
        react_1.default.createElement("label", { htmlFor: "password" }, "Password:"),
        react_1.default.createElement("input", { "data-testid": "password", type: "password", name: "password", value: password, onChange: handlePasswordChange }),
        react_1.default.createElement("label", null,
            react_1.default.createElement("input", { "data-testid": "remember", name: "remember", type: "checkbox", checked: remember, onChange: handleRememberChange }),
            "Remember me?"),
        react_1.default.createElement("button", { type: "submit", "data-testid": "submit" }, "Sign in")));
}
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map