"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Label", () => {
  it("Component Render Label", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Label"));
    const text = _react.screen.getByText("Label");
    expect(text).toBeInTheDocument();
  });
  it("Component Render Lowercase", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "label"));
    const text = _react.screen.getByText("Label");
    expect(text).toBeInTheDocument();
  });
});