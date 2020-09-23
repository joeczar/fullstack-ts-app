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
let compression = require('compression');
let app = routing_controllers_1.createExpressServer({
    controllers: [User_controller_1.UserController]
}); // creates express app, registers all controller routes and returns you express app instance
app.use(compression());
const express_1 = __importDefault(require("express"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi93ZWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNEJBQTBCO0FBQzFCLDZEQUEwRDtBQUMxRCxnREFBd0I7QUFDeEIsZ0RBQXdCO0FBQ3hCLG1FQUErRDtBQUMvRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekMsSUFBSSxHQUFHLEdBQUcseUNBQW1CLENBQUM7SUFDNUIsV0FBVyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztDQUM5QixDQUFDLENBQUMsQ0FBQyw0RkFBNEY7QUFDaEcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLHNEQUFxRDtBQUdyRCw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLHlCQUF5QjtBQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUzQiw2QkFBNkI7QUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJFLGNBQWM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQWEsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsaUJBQWlCO0FBQ0osUUFBQSxLQUFLLEdBQUcsQ0FBQyxJQUFZLEVBQWlCLEVBQUU7SUFDakQsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV0QyxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIn0=