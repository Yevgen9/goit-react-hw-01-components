import React from 'react';
import user from './user.json';

import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img
          className={styles.avatar}
          src={user.avatar}
          alt={user.username}
          width="320"
        />
        <p className={styles.name}>{user.username}</p>
        <p className={styles.tag}>@{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
