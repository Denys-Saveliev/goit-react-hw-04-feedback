import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.list}>
    <li className={s.item}>Good: {good}</li>
    <li className={s.item}>Neutral: {neutral}</li>
    <li className={s.item}>Bad: {bad}</li>
    <li className={s.item}>Total feedback: {total}</li>
    <li className={s.item}>All positive feedback: {positivePercentage}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
