"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Component Test Iframe', () => {
  it('Component Render Iframe', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, {
      title: "Test iframe",
      src: "http://google.com"
    }));
    const iframe = _react.screen.getByTitle('Test iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'http://google.com');
  });
});