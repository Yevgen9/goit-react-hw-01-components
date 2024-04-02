import React from 'react';
import user from './user.json';

import s from './Profile.module.scss';

function Profile() {
  return (
    <div className={s.profile}>
      <div className="description">
        <img
          className={s.avatar}
          src={user.avatar}
          alt={user.username}
          width="320"
        />
        <p className={s.name}>{user.username}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.location}>{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
