import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <p className={s.text}>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
