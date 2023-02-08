import { LinkBtn, Wrapper } from './Navigate.styled';

const Navigate = () => {
  return (
    <Wrapper>
      <LinkBtn to="cast">Cast</LinkBtn>
      <LinkBtn to="reviews">Reviews</LinkBtn>
    </Wrapper>
  );
};
export default Navigate;
