"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const User_controller_1 = require("./controllers/User.controller");
const express_1 = __importDefault(require("express"));
let app = routing_controllers_1.createExpressServer({
    controllers: [User_controller_1.UserController]
}); // creates express app, registers all controller routes and returns you express app instance
// Express app initialization
// const app = express();
// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');
// Static files configuration
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
// Controllers
app.get('/*', (_req, res) => {
    res.render('index');
});
// Start function
exports.start = (port) => {
    const server = http_1.default.createServer(app);
    return new Promise((resolve, _reject) => {
        server.listen(port, resolve);
    });
};
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi93ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNEJBQTBCO0FBQzFCLDZEQUEwRDtBQUMxRCxnREFBd0I7QUFDeEIsZ0RBQXdCO0FBQ3hCLG1FQUErRDtBQUMvRCxzREFBcUQ7QUFFckQsSUFBSSxHQUFHLEdBQUcseUNBQW1CLENBQUM7SUFDNUIsV0FBVyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztDQUM5QixDQUFDLENBQUMsQ0FBQyw0RkFBNEY7QUFHaEcsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6Qix5QkFBeUI7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFM0IsNkJBQTZCO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVyRSxjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFhLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUNILGlCQUFpQjtBQUNKLFFBQUEsS0FBSyxHQUFHLENBQUMsSUFBWSxFQUFpQixFQUFFO0lBQ2pELE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFdEMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLGtCQUFlLEdBQUcsQ0FBQyJ9