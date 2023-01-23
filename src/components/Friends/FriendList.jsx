import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = props => (
  <ul>
    {props.friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      ></FriendListItem>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired  
};