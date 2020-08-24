"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = "\n            <span class=\"user-name\">Hola, " + users_1.getUsers()[0].username + "</span>\n            <button id=\"closeSessionButton\" class=\"btn btn-danger my-2 my-sm-0 sign-off\" data-toggle=\"modal\">Cerrar Sesi\u00F3n</button>\n        ";
        document.getElementById('closeSessionButton').addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
