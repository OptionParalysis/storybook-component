import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './accordion.css';

const Accordion = ({ children, className, ...other }) => {
  const classNames = classnames('enc-accordion-wrapper', className);
  return (
    <ul
      className={classNames}
      role="tablist"
      aria-multiselectable="true"
      {...other}>
      {children}
    </ul>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Accordion;