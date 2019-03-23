"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var messageResponse = function messageResponse(response, statusCode, message) {
  return response.status(statusCode).send(message);
};

var _default = messageResponse;
exports.default = _default;