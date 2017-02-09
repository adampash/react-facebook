'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Parser = (_temp = _class = function (_Component) {
  _inherits(Parser, _Component);

  function Parser(props) {
    _classCallCheck(this, Parser);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { loaded: false };
    return _this;
  }

  Parser.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!_canUseDom2.default) {
      return;
    }

    this.context.facebook.whenReady(function (err, facebook) {
      if (err) {
        return;
      }

      facebook.parse(_this2.container, function () {
        return _this2.setState({ loaded: true });
      });
    });
  };

  Parser.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  Parser.prototype.render = function render() {
    var _this3 = this;

    var className = this.props.className;
    var loaded = this.state.loaded;


    return _react2.default.createElement(
      'div',
      { className: className, ref: function ref(c) {
          _this3.container = c;
        } },
      this.renderComponent(loaded)
    );
  };

  return Parser;
}(_react.Component), _class.propTypes = {
  className: _react.PropTypes.string
}, _class.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes), _temp);
exports.default = Parser;