'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Facebook = require('./Facebook');

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Login = (_temp = _class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props, context) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onReady = function (err, facebook) {
      if (err) {
        _this.props.onResponse(err);
        return;
      }

      _this.setState({ facebook: facebook });

      if (_this.props.onReady) {
        _this.props.onReady();
      }
    };

    _this.onClick = function (evn) {
      evn.stopPropagation();
      evn.preventDefault();

      var isWorking = _this.isWorking();
      if (isWorking) {
        return;
      }

      _this.setWorking(true);

      var _this$props = _this.props,
          scope = _this$props.scope,
          fields = _this$props.fields,
          onResponse = _this$props.onResponse,
          returnScopes = _this$props.returnScopes,
          rerequest = _this$props.rerequest;

      var facebook = _this.state.facebook;
      var loginQpts = { scope: scope };

      if (returnScopes) {
        loginQpts.return_scopes = true;
      }

      if (rerequest) {
        loginQpts.auth_type = 'rerequest';
      }

      facebook.login(loginQpts, function (err, loginStatus) {
        if (err) {
          _this.setWorking(false);
          onResponse(err);
          return;
        }

        if (loginStatus !== _Facebook.LoginStatus.AUTHORIZED) {
          _this.setWorking(false);
          onResponse(new Error('Unauthorized user'));
          return;
        }

        facebook.getTokenDetailWithProfile({ fields: fields }, function (err2, data) {
          _this.setWorking(false);

          if (err2) {
            onResponse(err2);
            return;
          }

          onResponse(null, data);
        });
      });
    };

    _this.state = {};
    return _this;
  }

  Login.prototype.componentDidMount = function componentDidMount() {
    this.context.facebook.whenReady(this.onReady);
  };

  Login.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.facebook.dismiss(this.onReady);
  };

  Login.prototype.setWorking = function setWorking(working) {
    this.setState({ working: working });

    if (this.props.onWorking) {
      this.props.onWorking(working);
    }
  };

  Login.prototype.isWorking = function isWorking() {
    var _state = this.state,
        working = _state.working,
        facebook = _state.facebook;


    return working || !facebook;
  };

  Login.prototype.render = function render() {
    var children = this.props.children;


    return (0, _react.cloneElement)(children, { onClick: this.onClick });
  };

  return Login;
}(_react.Component), _class.propTypes = {
  scope: _react.PropTypes.string.isRequired,
  fields: _react.PropTypes.array.isRequired,
  onResponse: _react.PropTypes.func.isRequired,
  onReady: _react.PropTypes.func,
  onWorking: _react.PropTypes.func,
  children: _react.PropTypes.node.isRequired,
  returnScopes: _react.PropTypes.bool,
  rerequest: _react.PropTypes.bool
}, _class.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes), _class.defaultProps = {
  scope: '',
  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'email', 'locale', 'gender', 'timezone', 'verified', 'link'],
  returnScopes: false,
  rerequest: false
}, _temp);
exports.default = Login;