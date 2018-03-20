import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import './button.css';

const Button = ({
  children,
  className,
  disabled,
  small,
  link,
  kind,
  href,
  tabIndex,
  type,
  icon,
  iconDescription,
  ...other
}) => {
  const buttonClasses = classNames(className, {
    'enc-btn': true,
    'primary': kind === 'primary',
    'basic': kind === 'basic',
    'danger': kind === 'danger',
    'success': kind === 'success',
    'link': kind === 'link',
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };

  const button = (
    <button {...other} {...commonProps} disabled={disabled} type={type}>
      {children}
    </button>
  );

  const anchor = (
    <a {...other} {...commonProps} href={href} role="button">
      {children}
    </a>
  );

  return href ? anchor : button;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'disabled',
    'link'
  ]).isRequired,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  role: PropTypes.string,
};

Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};

export default Button;