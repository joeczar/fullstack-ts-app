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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi9mcm9udGVuZC9Mb2dpbkZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBVTFCLFNBQVMsU0FBUyxDQUFDLEtBQVk7SUFDN0IsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7UUFDdEUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQ3RFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtRQUN0RSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3QixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBa0IsRUFBRSxFQUFFO1FBQzFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsdURBQWtCLFlBQVksRUFBQyxRQUFRLEVBQUUsWUFBWTtRQUNuRCx5Q0FBTyxPQUFPLEVBQUMsVUFBVSxnQkFBa0I7UUFDM0Msd0RBQ2MsVUFBVSxFQUN0QixJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFFLFFBQVEsRUFDZixRQUFRLEVBQUUsb0JBQW9CLEdBQzlCO1FBRUYseUNBQU8sT0FBTyxFQUFDLFVBQVUsZ0JBQWtCO1FBQzNDLHdEQUNjLFVBQVUsRUFDdEIsSUFBSSxFQUFDLFVBQVUsRUFDZixJQUFJLEVBQUMsVUFBVSxFQUNmLEtBQUssRUFBRSxRQUFRLEVBQ2YsUUFBUSxFQUFFLG9CQUFvQixHQUM5QjtRQUVGO1lBQ0Usd0RBQ2MsVUFBVSxFQUN0QixJQUFJLEVBQUMsVUFBVSxFQUNmLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLFFBQVEsRUFDakIsUUFBUSxFQUFFLG9CQUFvQixHQUM5QjsyQkFFSTtRQUVSLDBDQUFRLElBQUksRUFBQyxRQUFRLGlCQUFhLFFBQVEsY0FFakMsQ0FDSixDQUNSLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsU0FBUyxDQUFDIn0=