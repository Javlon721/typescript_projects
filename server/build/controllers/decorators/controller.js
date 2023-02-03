"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
function controller(routePrefix) {
    console.log('I am working');
    return function (target) {
        console.log(target.prototype.__proto__);
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
