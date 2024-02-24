"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component Datalist
 * @param {*} props
 * @returns element
 */

const Datalist = props => {
  // declare structure props
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("datalist", props, children);
};
var _default = exports.default = Datalist;