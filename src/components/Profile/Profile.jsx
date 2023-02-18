import PropTypes from 'prop-types';
import { ProfileDiv } from './Profile.styled';
import { Description } from './Profile.styled';
import { AvatarImg } from './Profile.styled';
import { Location } from './Profile.styled';
import { Tag } from './Profile.styled';
import { Name } from './Profile.styled';
import { Stats } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';
import { StatsItem } from './Profile.styled';

export const Profile = ({ propsUser }) => {
  const { username, tag, location, avatar, stats } = propsUser;

  return (
    <div>
      <ProfileDiv>
        <Description>
          <AvatarImg src={avatar} alt={username} width="240" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </ProfileDiv>
    </div>
  );
};

Profile.propTypes = {
  propsUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
