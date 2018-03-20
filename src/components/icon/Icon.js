import PropTypes from 'prop-types';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Icon = ({
  className,
  description,
  name,
  ...props
}) => {

  return (
    <i {...props} aria-label={description} alt={description} className={`fa ${name}`}></i>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  description : PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  className: 'fa-caret-down',
  description: 'Provide a description that for the action or purpose.'
}

export default Icon;