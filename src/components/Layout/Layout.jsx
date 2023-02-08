import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
import { Header, HeaderNav, HeaderNavLink } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderNav>
            <HeaderNavLink to="/" end>
              Home
            </HeaderNavLink>
            <HeaderNavLink to="/movies">Movies</HeaderNavLink>
          </HeaderNav>
        </Container>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default Layout;
