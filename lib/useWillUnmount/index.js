"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useWillUnmount = function useWillUnmount(fn) {
  react_1.useEffect(function () {
    return function () {
      return fn && fn();
    };
  }, []);
};

exports["default"] = useWillUnmount;