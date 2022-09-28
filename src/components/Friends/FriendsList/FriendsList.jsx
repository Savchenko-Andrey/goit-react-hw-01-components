import PropTypes from 'prop-types';
import {FriendList} from '../FriendListItem/FriendListItem';

import {CardFriends, Item} from './FriendsList.styled';

export const Friends = ({ data }) => {
    return <CardFriends>
        <Item>
        <FriendList data={data}/>
        </Item>
    </CardFriends>
};

Friends.prototype = {
    data: PropTypes.array.isRequired,
  };