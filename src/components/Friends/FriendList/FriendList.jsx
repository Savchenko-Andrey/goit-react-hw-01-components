import PropTypes from 'prop-types';
import {List, IsOnline, ImgUser,  Name} from './FriendList.styled'

export const FriendList = ({data}) => {
    return data.map(item => {
        return <List key={item.id}>
                <IsOnline selected={item.isOnline}></IsOnline>
                <ImgUser>
                    <img src={item.avatar} alt={item.name} width="48" />
                </ImgUser>
                <Name>{item.name}</Name>
            </List>
    })
}

FriendList.prototype = {
    data: PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  };