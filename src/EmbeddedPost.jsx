import React, { PropTypes } from 'react';
import Parser from './Parser';

export default class EmbeddedPost extends Parser {
  static propTypes = {
    href: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    showText: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    loaded: PropTypes.bool.isRequired,
    placeholder: PropTypes.func,
  };

  static defaultProps = {
    href: 'http://www.facebook.com',
    width: 500, // 350 - 750
    showText: false,
    loaded: false,
  };

  renderComponent() {
    const { href, width, showText, children, loaded, placeholder } = this.props;

    return (
      <div
        className="fb-post"
        data-href={href}
        data-width={width}
        data-show-text={showText}
      >
        {children}
        { loaded && <placeholder /> }
      </div>
    );
  }
}
