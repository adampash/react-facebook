'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser2 = require('./Parser');

var _Parser3 = _interopRequireDefault(_Parser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var EmbeddedPost = (_temp = _class = function (_Parser) {
  _inherits(EmbeddedPost, _Parser);

  function EmbeddedPost() {
    _classCallCheck(this, EmbeddedPost);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  EmbeddedPost.prototype.renderComponent = function renderComponent() {
    var _props = this.props,
        href = _props.href,
        width = _props.width,
        showText = _props.showText,
        children = _props.children,
        loaded = _props.loaded,
        placeholder = _props.placeholder;


    return _react2.default.createElement(
      'div',
      {
        className: 'fb-post',
        'data-href': href,
        'data-width': width,
        'data-show-text': showText
      },
      children,
      loaded && placeholder
    );
  };

  return EmbeddedPost;
}(_Parser3.default), _class.propTypes = {
  href: _react.PropTypes.string.isRequired,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
  showText: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  loaded: _react.PropTypes.bool.isRequired,
  placeholder: _react.PropTypes.node
}, _class.defaultProps = {
  href: 'http://www.facebook.com',
  width: 500, // 350 - 750
  showText: false,
  loaded: false
}, _temp);
exports.default = EmbeddedPost;