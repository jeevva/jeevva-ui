"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Unit Testing
 * Component Area
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
  it('Component Area', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Hello world"));
    const text = _react.screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
  it('Component Area render test hello codding', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Hello Coding"));
    const text = _react.screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
});