
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics/Statistics';
import { Friends } from './Friends/FriendsList/FriendsList';
import { Transactions } from './Transactions/Trnsactions/Transactions'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stat={data}/> 
      <Friends data={friends} />
      <Transactions items={transactions} />
    </div>
  );
};

