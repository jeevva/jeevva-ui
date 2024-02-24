"use strict";

var _react = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Component Test Img', () => {
  it('Component Render Img', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_.default, {
      alt: "Test img",
      src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp"
    }));
    const img = _react.screen.getByAltText('Test img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp');
  });
});