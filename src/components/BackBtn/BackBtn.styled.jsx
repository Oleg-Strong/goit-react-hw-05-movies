import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const BackButton = styled(Link)`
  display: flex;
  gap: 7px;
  margin-top: 20px;
  width: max-content;
  align-items: center;
  padding: 10px;
  color: #000000;
  transition: 250ms;
  &:hover {
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }
`;
