// import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 350px;
`;
export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FilmTitle = styled.h2`
  color: white;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 15px;
  transition: all 250ms;
`;
export const Item = styled.li`
  overflow: hidden;

  border-radius: 5px;
  width: 250px;
  box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.8);

  &:hover ${FilmTitle} {
    text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
      0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
      0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
  }
`;
