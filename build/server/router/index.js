"use strict";

var _express = _interopRequireDefault(require("express"));

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (request, response) {
  return (0, _messageResponse.default)(response, 200, {
    message: 'Welcome to BuzzFeed Challenge API! Read the docs at /api-docs/ to get started'
  });
});