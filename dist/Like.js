'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser2 = require('./Parser');

var _Parser3 = _interopRequireDefault(_Parser2);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _LikeSize = require('./constants/LikeSize');

var _LikeSize2 = _interopRequireDefault(_LikeSize);

var _LikeLayout = require('./constants/LikeLayout');

var _LikeLayout2 = _interopRequireDefault(_LikeLayout);

var _ColorScheme = require('./constants/ColorScheme');

var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

var _LikeAction = require('./constants/LikeAction');

var _LikeAction2 = _interopRequireDefault(_LikeAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Like = (_temp = _class = function (_Parser) {
  _inherits(Like, _Parser);

  function Like() {
    _classCallCheck(this, Like);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  Like.prototype.renderComponent = function renderComponent() {
    var _props = this.props,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        layout = _props.layout,
        colorScheme = _props.colorScheme,
        action = _props.action,
        showFaces = _props.showFaces,
        share = _props.share,
        children = _props.children,
        width = _props.width,
        size = _props.size,
        kidDirectedSite = _props.kidDirectedSite,
        referral = _props.referral;


    return _react2.default.createElement(
      'div',
      {
        className: 'fb-like',
        'data-ref': referral,
        'data-href': href,
        'data-layout': layout,
        'data-colorscheme': colorScheme,
        'data-action': action,
        'data-show-faces': showFaces,
        'data-share': share,
        'data-width': width,
        'data-size': size,
        'data-kid-directed-site': kidDirectedSite
      },
      children
    );
  };

  return Like;
}(_Parser3.default), _class.propTypes = _extends({}, _Parser3.default.propTypes, {
  referral: _react.PropTypes.string,
  href: _react.PropTypes.string,
  layout: _react.PropTypes.string.isRequired,
  showFaces: _react.PropTypes.bool.isRequired,
  colorScheme: _react.PropTypes.string.isRequired,
  action: _react.PropTypes.string.isRequired,
  share: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
  size: _react.PropTypes.string,
  kidDirectedSite: _react.PropTypes.bool.isRequired
}), _class.defaultProps = {
  layout: _LikeLayout2.default.STANDARD,
  showFaces: false,
  colorScheme: _ColorScheme2.default.LIGHT,
  action: _LikeAction2.default.LIKE,
  share: false,
  size: _LikeSize2.default.SMALL,
  kidDirectedSite: false
}, _temp);
exports.default = Like;