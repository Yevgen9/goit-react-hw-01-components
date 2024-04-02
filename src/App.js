import React from 'react';

import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from './components/transactions/transactions.json';
import css from'./appCss.css';

import Profile from './components/profile/Profile';
import StatisticsList from './components/statistics/StatisticsList';
import FriendsList from './components/friends/FriendsList';

import TransactionsList from './components/transactions/TransactionsList';

function App() {
  return (
    <div>
      <Profile />
      <StatisticsList stats={data} />
      <FriendsList friendsProfile={friends} />
      <TransactionsList items={transactions} />
    </div>
  );
}

export default App;
