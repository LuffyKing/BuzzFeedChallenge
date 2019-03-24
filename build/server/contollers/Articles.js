"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryHelper = _interopRequireDefault(require("../helperFunctions/queryHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An  object that handles Articles api requests
 */
var Articles = {
  /**
  * It gets all the articles on the application
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getAllArticles: function getAllArticles(request, response) {
    var hasQuery = request.params.hasQuery;
    var valueArray = [];
    var where = '';
    var sectionPhrase = '';

    if (hasQuery) {
      var section = request.query.section;
      where = 'where section = $1';
      valueArray = [section];
      sectionPhrase = "for the ".concat(section, " section");
    }

    (0, _queryHelper.default)(response, "SELECT * FROM ARTICLES ".concat(where, ";"), valueArray, '', sectionPhrase);
  },

  /**
  * It gets all the top x articles on buzzfeed and can be filtered
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getTopArticles: function getTopArticles(request, response) {
    var _request$params = request.params,
        topLimit = _request$params.topLimit,
        hasQuery = _request$params.hasQuery;
    var valueArray = [topLimit];
    var where = '';
    var sectionPhrase = '';

    if (hasQuery) {
      var section = request.query.section;
      where = 'where section = $2';
      valueArray = [topLimit, section];
      sectionPhrase = "for the ".concat(section, " section");
    }

    (0, _queryHelper.default)(response, "SELECT * FROM ARTICLES ".concat(where, " ORDER BY VIEWS DESC LIMIT $1;"), valueArray, 'The top', sectionPhrase);
  },

  /**
  * It gets a random article from buzzfeed
  * @param {Object} request - request object containing params and body
  * @param {Object} response - response object that conveys the result of the request
  * @returns {Object} - response object that has a status code of 200 and 404 error if no
  * articles are found.
  */
  getRandomArticle: function getRandomArticle(request, response) {
    var valueArray = [];
    var sectionPhrase = '';
    (0, _queryHelper.default)(response, 'SELECT * FROM ARTICLES ORDER BY RANDOM() LIMIT 1;', valueArray, '', sectionPhrase, 'Article', 'get single article');
  }
};
var _default = Articles;
exports.default = _default;