"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useDidMount = function useDidMount(fn) {
  react_1.useEffect(function () {
    fn && fn();
  }, []);
};

exports["default"] = useDidMount;