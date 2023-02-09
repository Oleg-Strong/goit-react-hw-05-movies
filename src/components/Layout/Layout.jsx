import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container';
import Loader from 'components/Loader';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default Layout;
