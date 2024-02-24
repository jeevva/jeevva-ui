"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Component Test Fieldset", () => {
  it("Component Render Fieldset", () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Fieldset"));
    const text = _react.screen.getByText("Fieldset");
    expect(text).toBeInTheDocument();
  });
});