"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../db/index"));

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* It gets all the top articles on the application
* @param {Object} request - request object containing params and body
* @param {Object} response - response object that conveys the result of the request
* @param{Object} next - middleware that calls the net middleware in the stack
* @returns {Object} - response object that has a status code of 400 may returned if the
* topLimit is in valid
*/
var sectionValidator = function sectionValidator(request, response, next) {
  var section = request.query.section;

  if (!section) {
    request.params.hasQuery = false;
    next();
    return;
  }

  if (/[^a-zA-Z0-9-]/.test(section)) {
    return (0, _messageResponse.default)(response, 422, {
      message: "The value ".concat(section, " contains a non-alphanumeric or - character, please try again without that character.")
    });
  }

  var query = {
    text: 'select distinct section from articles;',
    values: [],
    rowMode: 'array'
  };

  _index.default.query(query, []).then(function (result) {
    section = section.toLowerCase().replace(/^\w/, function (firstLetter) {
      return firstLetter.toUpperCase();
    });

    if (result.rows.length > 0) {
      var sectionsAvailable = result.rows.map(function (el) {
        return el[0];
      });

      if (sectionsAvailable.includes(section)) {
        request.params.hasQuery = true;
        request.query.section = section;
        next();
        return;
      }

      return (0, _messageResponse.default)(response, 404, {
        message: "The section ".concat(section, " was not found on BuzzFeed, try again with one of the following sections ").concat(sectionsAvailable.join(','), ".")
      });
    }

    return (0, _messageResponse.default)(response, 404, {
      message: 'Currently there are no sections available, please try again without a section.'
    });
  }).catch(function (error) {
    return setImmediate(function () {
      return (0, _messageResponse.default)(response, 500, {
        message: error.stack
      });
    });
  });
};

var _default = sectionValidator;
exports.default = _default;