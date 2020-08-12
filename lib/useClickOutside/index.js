"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var useClickOutside = function useClickOutside(onClickOutSide, ele) {
  var clickRef = react_1.useRef();
  react_1.useLayoutEffect(function () {
    var target = utils_1.getTargetObject(clickRef.current ? clickRef : ele);
    if (!target) return function () {};

    var handleClickOutside = function handleClickOutside(e) {
      var targetElement = e.target;

      if (!target.contains(targetElement)) {
        onClickOutSide(e);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickRef, ele]);
  return clickRef || undefined;
};

exports["default"] = useClickOutside;