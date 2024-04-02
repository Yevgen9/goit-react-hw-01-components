import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({ id, type, amount, currency }) => {
  return (
    <>
      <td className={styles.tdItem}>{type}</td>
      <td className={styles.tdItem}>{amount}</td>
      <td className={styles.tdItem}>{currency}</td>
    </>
  );
};

TransactionsHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsHistory;
