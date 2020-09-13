"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const express_1 = require("express");
exports.PingController = express_1.Router();
exports.PingController.get('/ping', async (req, res, next) => {
    try {
        res.status(200).json({ data: 'Pong!' });
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=PingController.js.map