"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Not Found Middleware
const notFoundRoute = (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        success: false,
    });
};
exports.default = notFoundRoute;
