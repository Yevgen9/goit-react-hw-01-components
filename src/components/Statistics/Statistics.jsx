import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

const Statistics = ({ id, label, percentage }) => {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
