"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Unit Testing
 * Component Figcaption
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
  it('Component Figcaption', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Hello world"));
    const text = _react.screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
  it('Component Figcaption render test hello codding', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, null, "Hello Coding"));
    const text = _react.screen.getByText('Hello world');
    expect(text).toBeInTheDocument();
  });
});