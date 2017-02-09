'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = require('core-decorators');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

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

var Feed = (_class = (_temp = _class2 = function (_Component) {
  _inherits(Feed, _Component);

  function Feed() {
    _classCallCheck(this, Feed);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Feed.prototype.onClick = function onClick(evn) {
    evn.preventDefault();
    evn.stopPropagation();

    var href = this.getSharerHref();
    var _props = this.props,
        width = _props.width,
        height = _props.height;


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

  Feed.prototype.getSharerHref = function getSharerHref() {
    var facebook = this.context.facebook;
    var _props2 = this.props,
        _props2$appId = _props2.appId,
        appId = _props2$appId === undefined ? facebook.props.appID : _props2$appId,
        redirectURI = _props2.redirectURI,
        display = _props2.display,
        from = _props2.from,
        to = _props2.to,
        _props2$link = _props2.link,
        link = _props2$link === undefined ? (0, _getCurrentHref2.default)() : _props2$link,
        picture = _props2.picture,
        source = _props2.source,
        name = _props2.name,
        caption = _props2.caption,
        description = _props2.description,
        ref = _props2.ref;


    var query = _qs2.default.stringify({
      app_id: appId,
      redirect_uri: redirectURI,
      display: display,
      from: from,
      to: to,
      link: link,
      picture: picture,
      source: source,
      name: name,
      caption: caption,
      description: description,
      ref: ref
    });

    return '//www.facebook.com/dialog/feed?' + query;
  };

  Feed.prototype.render = function render() {
    var children = this.props.children;


    return _react2.default.cloneElement(children, { onClick: this.onClick });
  };

  return Feed;
}(_react.Component), _class2.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes), _class2.propTypes = {
  children: _react.PropTypes.node,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  appId: _react.PropTypes.string,
  redirectURI: _react.PropTypes.string,
  display: _react.PropTypes.string.isRequired,
  from: _react.PropTypes.string,
  to: _react.PropTypes.string,
  link: _react.PropTypes.string,
  picture: _react.PropTypes.string,
  source: _react.PropTypes.string,
  name: _react.PropTypes.string,
  caption: _react.PropTypes.string,
  description: _react.PropTypes.string,
  ref: _react.PropTypes.string
}, _class2.defaultProps = {
  display: 'popup',
  width: 626,
  height: 436,
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onClick', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype)), _class);
exports.default = Feed;