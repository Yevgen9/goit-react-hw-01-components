import React from 'react';
import PropTypes from 'prop-types';
import '../scss/main.css';

const Statistics = ({ id, label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
