"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const express_1 = require("express");
exports.IndexController = express_1.Router();
exports.IndexController.get('/api/hi', async (req, res, next) => {
    try {
        res.status(200).send({ data: 'Hello from Ornio AS!' });
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=IndexController.js.map