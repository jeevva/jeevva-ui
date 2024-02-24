"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Bdo", () => {
  it("Component Render Bdo", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Bdo"));
    const text = _react.screen.getByText("Bdo");
    expect(text).toBeInTheDocument();
  });
});