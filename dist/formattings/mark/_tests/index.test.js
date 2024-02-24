"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Mark", () => {
  it("Component Render Mark", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Mark"));
    const text = _react.screen.getByText("Mark");
    expect(text).toBeInTheDocument();
  });
});