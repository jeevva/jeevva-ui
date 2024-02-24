"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component Heading
 * @param {*} props
 * @returns element
 */

const Heading = props => {
  // Declare structure props
  const {
    children,
    size
  } = props;
  switch (size) {
    case size === 2:
      return /*#__PURE__*/_react.default.createElement("h2", props, children);
    case size === 3:
      return /*#__PURE__*/_react.default.createElement("h3", props, children);
    case size === 4:
      return /*#__PURE__*/_react.default.createElement("h4", props, children);
    case size === 5:
      return /*#__PURE__*/_react.default.createElement("h5", props, children);
    case size === 6:
      return /*#__PURE__*/_react.default.createElement("h6", props, children);
    default:
      return /*#__PURE__*/_react.default.createElement("h1", props, children);
  }
};
var _default = exports.default = Heading;