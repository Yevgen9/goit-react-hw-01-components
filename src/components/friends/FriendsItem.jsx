import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../defaultImageUser.png';

import '../scss/main.css';

const FriendsItem = ({ id, name, avatar = defaultImg, isOnline }) => {
  return (
    <>
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
