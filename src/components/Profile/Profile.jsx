import React from 'react';
import user from './user.json';

import '../scss/main.css';
function Profile() {
  return (
    <div className="profile">
      <div className="description">
        <img
          className="avatar"
          src={user.avatar}
          alt={user.username}
          width="320"
        />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li className="statsItem">
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className="statsItem">
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className="statsItem">
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
