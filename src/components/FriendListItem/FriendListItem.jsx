import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import defaultAvatar from '../Default-welcomer.png';

export const FriendListItem = ({ avatar = defaultAvatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="50" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
