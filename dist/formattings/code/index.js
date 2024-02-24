"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component Code
 * @param {*} props
 * @returns element
 */

const Code = props => {
  // Declare structure props
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("code", props, children);
};
var _default = exports.default = Code;