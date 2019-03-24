"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _config = _interopRequireDefault(require("../config/config"));

var _articlesList = _interopRequireDefault(require("./seeds/articlesList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var config = _config.default[env];
var connectionString = config.DATABASE_URL || process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: connectionString
});

if (process.env.SETUP === 'SETUP') {
  pool.query("INSERT INTO ARTICLES(TITLE,DESCRIPTION,THUMBNAIL_URL, SECTION, VIEWS, URL) VALUES ".concat(_articlesList.default, ";"), [], function (err) {
    if (err) {
      throw err;
    }
  });
}

var _default = pool;
exports.default = _default;