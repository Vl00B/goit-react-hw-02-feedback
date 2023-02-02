import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './Notification.module.css';

export class Notification extends Component {
  render() {
    return <h3>{this.props.message}</h3>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
