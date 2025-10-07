"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'defaultAdminSecret'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'defaultSalt'),
    },
});
