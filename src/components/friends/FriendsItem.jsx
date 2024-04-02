import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../Assets/defaultImageUser.png';
import styles from './FriendsItem.module.scss';

const FriendsItem = ({ id, name, avatar = defaultImg, isOnline }) => {
  return (
    <>
      <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendsItem;
