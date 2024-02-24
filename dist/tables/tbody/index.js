"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component Tbody
 * @param {*} props
 * @returns element
 */

const Tbody = props => {
  // Declare structure props
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("tbody", props, children);
};
var _default = exports.default = Tbody;