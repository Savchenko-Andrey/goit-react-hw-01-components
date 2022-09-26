import PropTypes from 'prop-types';
import {FriendList} from './FriendList/FriendList';

import {CardFriends, Table} from './Friends.styled';

export const Friends = ({ data }) => {
    return <CardFriends>
        <Table>
        <FriendList data={data}/>
        </Table>
    </CardFriends>
};

Friends.prototype = {
    data: PropTypes.array.isRequired,
  };