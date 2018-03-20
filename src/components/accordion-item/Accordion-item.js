import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './accordion-item.css'
import Icon from '../icon/Icon';

export default class AccordionItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    onHeadingClick: PropTypes.func,
  };

  static defaultProps = {
    title: 'title',
    open: false,
    onClick: () => {},
    onHeadingClick: () => {},
  };

  state = {
    open: this.props.open,
  };

  componentWillReceiveProps({ open }) {
    if (open !== this.props.open) {
      this.setState({ open });
    }
  }

  handleClick = evt => {
    this.props.onClick(evt);
  };

  handleHeadingClick = evt => {
    const open = !this.state.open;
    this.setState({ open });
    this.props.onHeadingClick({ isOpen: open, event: evt });
  };

  handleKeyPress = evt => {
    const isKeyPressTarget = evt.target === evt.currentTarget;
    const isValidKeyPress = [13, 32].indexOf(evt.which) !== -1;

    if (isKeyPressTarget && isValidKeyPress) {
      this.handleHeadingClick(evt);
    }
  };

  render() {
    const {
      className,
      title,
      children,
      onClick, // eslint-disable-line no-unused-vars
      onHeadingClick, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const classNames = classnames(
      {
        'enc-accordion-active': this.state.open,
      },
      'enc-accordion',
      className
    );
    return (
      <li
        className={classNames}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="presentation"
        {...other}>
        <button
          type="button"
          className="enc-accordion-heading"
          role="tab"
          onClick={this.handleHeadingClick}>
          <Icon
            name="fa-angle-right"
            description="Expand/Collapse"
          />
          <div className="enc-accordion-title">{title}</div>
        </button>
        <div 
          className="enc-accordion-content"
          aria-hidden={this.handleHeadingClick}
        >{children}</div>
      </li>
    );
  }
}