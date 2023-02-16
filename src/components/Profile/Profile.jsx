import PropTypes from 'prop-types'
import css from '../Profile/Profile.module.css'
export const Profile = ({ propsUser }) => {
    const { username, tag, location, avatar, stats } = propsUser

    return (
    <div>
      <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width="240" />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

          <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>      
    </div>
)
};

Profile.propTypes = {
    propsUser: PropTypes.shape({
    username: PropTypes.string.isRequired ,
    tag: PropTypes.string.isRequired ,
    location: PropTypes.string.isRequired ,
    avatar: PropTypes.string.isRequired ,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        })
}).isRequired,
};