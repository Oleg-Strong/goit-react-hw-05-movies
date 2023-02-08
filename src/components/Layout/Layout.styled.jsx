import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #747474;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.75);
`;
export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const HeaderNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #ff0000;

    text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
      0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
      0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
  }
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
      0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
      0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
  }
`;
