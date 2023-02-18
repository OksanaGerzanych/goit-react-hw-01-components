import PropTypes from 'prop-types';
import { Item } from './Friends.styled';
import { Status } from './Friends.styled';
import { AvatarImg } from './Friends.styled';
import { Name } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status Online={isOnline}>{isOnline}</Status>
      <AvatarImg src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
