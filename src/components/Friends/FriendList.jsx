import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className="friendistics">
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <div className={css[friend.isOnline]}></div>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};


