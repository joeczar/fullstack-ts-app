"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var command_line_args_1 = __importDefault(require("command-line-args"));
// Setup command line options
var options = command_line_args_1.default([
    {
        name: 'env',
        alias: 'e',
        defaultValue: 'development',
        type: String
    }
]);
// Set the env file
var result2 = dotenv_1.default.config({
    path: "./env/" + options.env + ".env"
});
if (result2.error) {
    throw result2.error;
}
//# sourceMappingURL=LoadEnv.js.map