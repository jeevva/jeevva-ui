"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Tr", () => {
  it("Component Render Tr", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(_.default, null, "Tr"))));
    const text = _react.screen.getByText("Tr");
    expect(text).toBeInTheDocument();
  });
});