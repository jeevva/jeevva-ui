"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Wbr", () => {
  it("Component Render Wbr", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null));
    const wbrElement = document.querySelector("wbr");
    expect(wbrElement).toBeInTheDocument();
  });
});