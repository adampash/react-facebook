'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _coreDecorators = require('core-decorators');

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Share = (_class = (_temp = _class2 = function (_Component) {
  _inherits(Share, _Component);

  function Share() {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Share.prototype.getSharerHref = function getSharerHref() {
    var facebook = this.context.facebook;
    var _props = this.props,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        display = _props.display,
        _props$appId = _props.appId,
        appId = _props$appId === undefined ? facebook.props.appID : _props$appId,
        hashtag = _props.hashtag,
        redirectURI = _props.redirectURI,
        quote = _props.quote,
        mobileIframe = _props.mobileIframe;


    return '//www.facebook.com/dialog/share?' + _qs2.default.stringify({
      href: href,
      display: display,
      app_id: appId,
      hashtag: hashtag,
      redirect_uri: redirectURI,
      quote: quote,
      mobile_iframe: mobileIframe
    });
  };

  Share.prototype.onClick = function onClick(evn) {
    evn.preventDefault();
    evn.stopPropagation();

    var href = this.getSharerHref();
    var _props2 = this.props,
        width = _props2.width,
        height = _props2.height;


    var halfWidth = Math.floor(width / 2);
    var halfHeight = Math.floor(height / 2);

    var left = Math.floor(window.innerWidth / 2 - halfWidth);
    var top = Math.floor(window.innerHeight / 2 - halfHeight);

    var params = 'status=0, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0';

    window.open(href, 'sharer', params);

    var children = this.props.children;

    if (children && children.props && children.props.onClick) {
      children.props.onClick(evn);
    }
  };

  Share.prototype.render = function render() {
    var children = this.props.children;


    return _react2.default.cloneElement(children, { onClick: this.onClick });
  };

  return Share;
}(_react.Component), _class2.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes), _class2.propTypes = {
  href: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node,
  hashtag: _react.PropTypes.string,
  quote: _react.PropTypes.string,
  mobileIframe: _react.PropTypes.bool,
  display: _react.PropTypes.string.isRequired,
  appId: _react.PropTypes.string,
  redirectURI: _react.PropTypes.string
}, _class2.defaultProps = {
  display: 'popup',
  width: 626,
  height: 436,
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onClick', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype)), _class);
exports.default = Share;