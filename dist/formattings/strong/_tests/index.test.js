"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Component Test Strong', () => {
  it('Component Render Strong', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Strong"));
    const text = _react.screen.getByText('Strong');
    expect(text).toBeInTheDocument();
  });
});