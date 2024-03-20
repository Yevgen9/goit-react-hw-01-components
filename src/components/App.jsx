import user from './Profile/user.json';
import friends from './FriendList/friends.json';
import statistics from './Statistics/statistics.json';
import transactions from './TransactionHistory/transactions.json';

import { Profile } from './Profile/Profile.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
