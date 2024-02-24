"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Thead", () => {
  it("Component Render Thead", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement(_.default, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Thead")))));
    const text = _react.screen.getByText("Thead");
    expect(text).toBeInTheDocument();
  });
});