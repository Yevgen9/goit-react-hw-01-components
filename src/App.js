import React from 'react';

import data from './components/Statistics/data.json';
import friends from './components/Friends/friends.json';
import transactions from './components/Transactions/transactions.json';
import css from './appCss.css';

import Profile from './components/Profile/Profile';
import StatisticsList from './components/Statistics/StatisticsList';
import FriendsList from './components/Friends/FriendsList';

import TransactionsList from './components/Transactions/TransactionsList';

function App() {
  return (
    <>
      <Profile />
      <StatisticsList stats={data} />
      <FriendsList friendsProfile={friends} />
      <TransactionsList items={transactions} />
    </>
  );
}

export default App;
