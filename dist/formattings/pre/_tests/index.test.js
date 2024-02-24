"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Component Test Pre', () => {
  it('Component Render Pre', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Pre"));
    const text = _react.screen.getByText('Pre');
    expect(text).toBeInTheDocument();
  });
});