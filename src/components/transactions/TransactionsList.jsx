import React from 'react';
import PropTypes from 'prop-types';

import TransactionsItem from './TransactionHistory';
import s from './TransactionsHistory.module.scss';

function TransactionsList({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.trList}>
          <th className={s.thItem}>Type</th>
          <th className={s.thItem}>Amount</th>
          <th className={s.thItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionsItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};

export default TransactionsList;
