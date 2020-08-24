"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loggendIn_1 = __importDefault(require("./loggendIn"));
function default_1(dbUser, FormInfo) {
    if (FormInfo.username == dbUser.username) {
        if (FormInfo.password == dbUser.password) {
            localStorage.setItem('username', FormInfo.username);
            loggendIn_1.default();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
