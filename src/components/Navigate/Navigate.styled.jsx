import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const LinkBtn = styled(Link)`
  display: block;
  padding: 5px;
  width: 70px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: all 259ms;

  &:hover {
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.8);
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }
`;
