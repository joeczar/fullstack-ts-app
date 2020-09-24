"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const common_1 = require("@tsed/common");
const platform_express_1 = require("@tsed/platform-express");
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const method_override_1 = __importDefault(require("method-override"));
const rootDir = __dirname;
let Server = class Server {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    $beforeRoutesInit() {
        this.app
            .use(platform_express_1.GlobalAcceptMimesMiddleware) // optional
            .use(cookie_parser_1.default())
            .use(compression_1.default({}))
            .use(method_override_1.default())
            .use(body_parser_1.default.json())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }));
    }
};
__decorate([
    common_1.Inject(),
    __metadata("design:type", common_1.PlatformApplication)
], Server.prototype, "app", void 0);
__decorate([
    common_1.Configuration(),
    __metadata("design:type", Object)
], Server.prototype, "settings", void 0);
Server = __decorate([
    common_1.Configuration({
        rootDir,
        acceptMimes: ['application/json']
    })
], Server);
exports.Server = Server;
//# sourceMappingURL=Server.js.map