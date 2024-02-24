"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Table", () => {
  it("Component Render Table", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Header")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Data")))));
    const header = _react.screen.getByText("Header");
    const data = _react.screen.getByText("Data");
    expect(header).toBeInTheDocument();
    expect(data).toBeInTheDocument();
  });
});