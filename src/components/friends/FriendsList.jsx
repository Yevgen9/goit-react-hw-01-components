import React from 'react';
import PropTypes from 'prop-types';

import FriendsItem from './FriendsItem';

function FriendsList({ friendsProfile }) {
  return (
    //=============================================================
    // <ul className="friend-list">
    //   {friendsProfile.map(item => (
    //     <li key={item.id} className="item">
    //       <FriendsItem
    //         avatar={item.avatar}
    //         name={item.name}
    //         isOnline={item.isOnline}
    //       />
    //     </li>
    //   ))}
    // </ul>
//====================================================================
    // <ul className="friend-list">
    //   {friendsProfile.map(item => (
    //              <FriendsItem
    //        {...item}
    //       />
    //       ))}
    // </ul>
//====================================================================
    <ul className="friend-list">
      {friendsProfile.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="item">
          <FriendsItem avatar={avatar} name={name} isOnline={isOnline} />
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
