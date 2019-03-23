"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../db/index");

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

var _pluralSingluar = _interopRequireDefault(require("../helperFunctions/pluralSingluar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An  object that handles Articles api requests
 */
var Articles = {
  /**
  * It gets all the requests on the application
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getAllArticles: function getAllArticles(request, response) {
    _index.pool.query('SELECT * FROM ARTICLES;', []).then(function (result) {
      if (result.rows.length > 0) {
        var pluSig = (0, _pluralSingluar.default)(result.rows.length, 'article');
        return (0, _messageResponse.default)(response, 200, {
          message: "".concat(result.rows.length, " ").concat(pluSig, " found"),
          articles: result.rows
        });
      }

      return (0, _messageResponse.default)(response, 404, {
        message: 'No Articles were found'
      });
    }).catch(function (error) {
      return setImmediate(function () {
        return (0, _messageResponse.default)(response, 500, {
          message: error.stack
        });
      });
    });
  }
};
var _default = Articles;
exports.default = _default;