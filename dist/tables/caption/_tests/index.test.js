"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Caption", () => {
  it("Component Render Div Caption", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement(_.default, null, "Caption")));
    const text = _react.screen.getByText("Caption");
    expect(text).toBeInTheDocument();
  });
});