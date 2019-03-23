"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var pluralSingular = function pluralSingular(length, word) {
  return length > 1 ? "".concat(word, "s were") : "".concat(word, " was");
};

var _default = pluralSingular;
exports.default = _default;