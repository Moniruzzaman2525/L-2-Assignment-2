"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    if (err.statusCode === 404) {
        res.status(404).json({
            message: err._message,
            success: false,
            error: err.message || err,
        });
    }
    else {
        res.status(500).json({
            message: err._message,
            success: false,
            error: err || 'Something went wrong',
        });
    }
    // next()
};
exports.default = errorHandler;
