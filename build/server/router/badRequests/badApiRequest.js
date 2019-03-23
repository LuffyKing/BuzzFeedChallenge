"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var badApiRequest = function badApiRequest(request, response) {
  response.status(404).send({
    message: "Route not found, please read the docs for information on how to use BuzzFeedChallenge's APIs."
  });
};

var _default = badApiRequest;
exports.default = _default;