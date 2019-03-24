"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* It gets all the top articles on the application
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param{Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 400 may returned if the
* topLimit is in valid
*/
var getTopArticlesValidator = function getTopArticlesValidator(request, response, next) {
  if (_validator.default.isInt(request.params.topLimit.trim())) {
    request.params.topLimit = request.params.topLimit.trim();
    next();
  } else {
    return response.status(422).send({
      message: "The value ".concat(request.params.topLimit, " is not an integer")
    });
  }
};

var _default = getTopArticlesValidator;
exports.default = _default;