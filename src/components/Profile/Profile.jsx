import PropTypes from 'prop-types';
import { CardUser, ContainerUser, ImgUser, ContainerParagraph, ContainerLink, ContainerList } from './Profile.styled';

export const Profile = ({ user: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {
    return <CardUser>
  <ContainerUser>
    <ImgUser>
    <img
        src={avatar}
          alt={tag}
        width="220"
          />
    </ImgUser>
    <ContainerParagraph>{username}</ContainerParagraph>
    <ContainerParagraph>@{tag}</ContainerParagraph>
    <ContainerParagraph>{location}</ContainerParagraph>
  </ContainerUser>

  <ContainerLink>
    <ContainerList>
      <span>Followers </span>
      <span>{followers}</span>
    </ContainerList>
    <ContainerList>
      <span>Views </span>
      <span>{views}</span>
    </ContainerList>
    <ContainerList>
      <span>Likes </span>
      <span>{likes}</span>
    </ContainerList>
  </ContainerLink>
</CardUser>
};



Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};