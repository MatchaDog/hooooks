"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useDidUpdate = function useDidUpdate(fn, conditions) {
  var didMountRef = react_1.useRef(false);
  react_1.useEffect(function () {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    return fn && fn();
  }, conditions);
};

exports["default"] = useDidUpdate;