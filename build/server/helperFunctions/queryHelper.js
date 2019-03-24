"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _messageResponse2 = _interopRequireDefault(require("./messageResponse"));

var _pluralSingluar = _interopRequireDefault(require("./pluralSingluar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var queryHelper = function queryHelper(response, query, valueArray, messageStart, sectionPhrase) {
  var word = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'Article';
  var operation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'get multiple articles';
  var message = '';
  var articlePropertyName = '';
  var getRowValue;

  switch (operation) {
    case 'get multiple articles':
      message = "".concat(messageStart, " rowLength pluSig found ").concat(sectionPhrase);
      articlePropertyName = 'articles';

      getRowValue = function getRowValue(result) {
        return result.rows;
      };

      break;

    case 'get single article':
      message = "Here is a random article ".concat(sectionPhrase);
      articlePropertyName = 'article';

      getRowValue = function getRowValue(result) {
        return result.rows[0];
      };

      break;

    default:
      break;
  }

  _db.default.query(query, valueArray).then(function (result) {
    if (result.rows.length > 0) {
      message.replace('rowLength', result.rows.length);
      message.replace('pluSig', (0, _pluralSingluar.default)(result.rows.length, word));
      return (0, _messageResponse2.default)(response, 200, _defineProperty({
        message: message
      }, articlePropertyName, getRowValue(result)));
    }

    return (0, _messageResponse2.default)(response, 404, {
      message: 'No articles were found'
    });
  }).catch(function (error) {
    return setImmediate(function () {
      return (0, _messageResponse2.default)(response, 500, {
        message: error.stack
      });
    });
  });
};

var _default = queryHelper;
exports.default = _default;