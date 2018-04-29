"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
var login_vue_1 = __importDefault(require("../components/login.vue"));
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: login_vue_1.default
        }
    ]
});
//# sourceMappingURL=index.js.map