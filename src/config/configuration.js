"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
require('dotenv').config({ path: './.env' });
exports.appConfig = {
    baseUrl: process.env.BASE_URL,
    port: process.env.PORT,
    routes: {}
};
