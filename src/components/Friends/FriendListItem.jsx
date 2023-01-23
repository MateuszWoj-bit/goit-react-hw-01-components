import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, id, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <div className={css[isOnline]}></div>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
