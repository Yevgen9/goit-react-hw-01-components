import React from "react";
import TransactionsItem from "./TransactionHistory";

function TransactionsList({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr className="trList">
          <th className="thItem">Type</th>
          <th className="thItem">Amount</th>
          <th className="thItem">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
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

export default TransactionsList;
