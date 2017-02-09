import React, { Component, PropTypes } from 'react';
import canUseDOM from 'can-use-dom';
import FacebookProvider from './FacebookProvider';

export default class Parser extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static contextTypes = {
    ...FacebookProvider.childContextTypes,
  };

  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }

    this.context.facebook.whenReady((err, facebook) => {
      if (err) {
        return;
      }

      facebook.parse(this.container, () => this.setState({ loaded: true }));
    });
  }

  shouldComponentUpdate() {
    // return false;
  }

  render() {
    const { className } = this.props;
    const { loaded } = this.state

    return (
      <div className={className} ref={(c) => { this.container = c; }}>
        {this.renderComponent(loaded)}
      </div>
    );
  }
}
