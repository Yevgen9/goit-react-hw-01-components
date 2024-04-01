import React from "react";
import PropTypes from "prop-types";

import css from "./friendsCss.css";

const FriendsItem = ({ id, name, avatar, isOnline }) => {
  return (
    <>
      <span className="status">{isOnline ? "Online" : "Offline"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsItem;
