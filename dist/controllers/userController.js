"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const signup = (req, res) => {
    return res.send({ message: "Signup Success!" });
};
exports.signup = signup;
const login = (req, res) => {
    return res.send({ message: "Login Success!" });
};
exports.login = login;
const logout = (req, res) => {
    return res.send({ message: "Logout Success!" });
};
exports.logout = logout;
