import React from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics';
import s from './Statistics.module.css';

function StatisticsList({ stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className={s.item}>
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRegular,
    })
  ),
};

export default StatisticsList;
