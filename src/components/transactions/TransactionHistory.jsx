import React from 'react';
import PropTypes from 'prop-types';

import '../scss/main.css';

const TransactionsHistory = ({ id, type, amount, currency }) => {
  return (
    <>
      <td className="tdItem">{type}</td>
      <td className="tdItem">{amount}</td>
      <td className="tdItem">{currency}</td>
    </>
  );
};

TransactionsHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionsHistory;
