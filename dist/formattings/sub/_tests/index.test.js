"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Sub", () => {
  it("Component Render Sub", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "H2O"));
    const text = _react.screen.getByText("H2O");
    expect(text).toBeInTheDocument();
  });
  it("Component Render Sub Hello", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Hello"));
    const text = _react.screen.getByText("Hello");
    expect(text).toBeInTheDocument();
  });
});