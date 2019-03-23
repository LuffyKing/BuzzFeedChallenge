"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawdata = _fs.default.readFileSync('articles.json');

var articlesArr = JSON.parse(rawdata).results;
var articlesList = articlesArr.reduce(function (values, current, index, arr) {
  values += index === arr.length - 1 ? "($$".concat(current.title, "$$,\n      $$").concat(current.description, "$$,\n      '").concat(current.thumbnail_url, "',\n      '").concat(current.section, "', \n      ").concat(current.views, ",\n      '").concat(current.url, "')") : "(\n        $$".concat(current.title, "$$,\n        $$").concat(current.description, "$$,\n        '").concat(current.thumbnail_url, "' ,\n        '").concat(current.section, "',\n        ").concat(current.views, ",\n        '").concat(current.url, "'),");
  return values;
}, '');
exports.default = articlesList;