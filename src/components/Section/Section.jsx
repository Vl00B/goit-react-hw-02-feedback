import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <section className={s.container}>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
