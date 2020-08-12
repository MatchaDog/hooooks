"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var useMutation = function useMutation(onObserved, ele, options) {
  var observedRef = react_1.useRef();
  react_1.useLayoutEffect(function () {
    var target = utils_1.getTargetObject(observedRef.current ? observedRef : ele);

    if (!target) {
      return function () {};
    }

    var observer = new MutationObserver(function (changes) {
      changes.forEach(function (change) {
        onObserved(change);
      });
    });
    observer.observe(target, options);
    return function () {
      observer && observer.disconnect();
    };
  }, [observedRef, ele]);
  return observedRef || undefined;
};

exports["default"] = useMutation;