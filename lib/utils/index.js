"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetObject = void 0;

var getTargetObject = function getTargetObject(target) {
  if (!target) return null;

  if (typeof target === "function") {
    return target();
  }

  if (_typeof(target) === "object") {
    return "current" in target ? target.current : target;
  }
};

exports.getTargetObject = getTargetObject;