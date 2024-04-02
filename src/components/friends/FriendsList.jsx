import React from 'react';
import PropTypes from 'prop-types';

import FriendsItem from './FriendsItem';

function FriendsList({ friendsProfile }) {
  return (
    <ul className="friend-list">
      {friendsProfile.map(item => (
        <li key={item.id} className="item">
          <FriendsItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friendsProfile: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isReqular,
    })
  ),
};

export default FriendsList;
