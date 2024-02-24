"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Component Test Ruby', () => {
  it('Component Render Ruby', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Ruby"));
    const text = _react.screen.getByText('Ruby');
    expect(text).toBeInTheDocument();
  });
});