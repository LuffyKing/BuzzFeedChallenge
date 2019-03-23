"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _badApiRequest = _interopRequireDefault(require("./router/badRequests/badApiRequest"));

var _config = _interopRequireDefault(require("./config/config"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var config = _config.default[env];
var app = (0, _express.default)();
var port = process.env.PORT || config.PORT;
app.use((0, _cors.default)({
  credentials: true,
  origin: true
}));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use((0, _morgan.default)('dev'));
app.use('/api/v1', _router.default);
app.use('/', _badApiRequest.default);
app.listen(port);
var _default = app;
exports.default = _default;