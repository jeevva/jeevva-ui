"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Blockquote", () => {
  it("Component Render Blockquote", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Blockquote"));
    const text = _react.screen.getByText("Blockquote");
    expect(text).toBeInTheDocument();
  });
});