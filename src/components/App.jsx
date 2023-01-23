import user from 'components/user.json';
import { Profile } from './Profile/Profile';
import data from 'components/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
