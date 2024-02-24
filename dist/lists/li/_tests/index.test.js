"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Li", () => {
  it("Component Render Li", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Li"));
    const text = _react.screen.getByText("Li");
    expect(text).toBeInTheDocument();
  });
});