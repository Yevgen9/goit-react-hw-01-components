import React from "react";
import Statistics from "./Statistics";

function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map((item) => (
          <li key={item.id} className="item">
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;
