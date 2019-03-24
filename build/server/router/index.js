"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _messageResponse = _interopRequireDefault(require("../helperFunctions/messageResponse"));

var _Articles = _interopRequireDefault(require("../contollers/Articles"));

var _getTopArticlesValidator = _interopRequireDefault(require("../validator/getTopArticlesValidator"));

var _sectionValidator = _interopRequireDefault(require("../validator/sectionValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (request, response) {
  return (0, _messageResponse.default)(response, 200, {
    message: "Welcome to BuzzFeed's Challenge API! Read the docs at /api-docs/ to get started"
  });
});
router.get('/getAllArticles', _sectionValidator.default, _Articles.default.getAllArticles);
router.get('/getRandomArticle', _Articles.default.getRandomArticle);
router.get('/getTopArticles/:topLimit', _getTopArticlesValidator.default, _sectionValidator.default, _Articles.default.getTopArticles);
var _default = router;
exports.default = _default;