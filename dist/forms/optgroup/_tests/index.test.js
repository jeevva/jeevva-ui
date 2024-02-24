"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Optgroup", () => {
  it("Component Render Optgroup", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Optgroup"));
    const text = _react.screen.getByText("Optgroup");
    expect(text).toBeInTheDocument();
  });
});