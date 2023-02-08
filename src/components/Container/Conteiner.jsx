import { Container } from './Conteiner.styled';
import PropTypes from 'prop-types';
const Conteiner = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Conteiner;
Conteiner.propTypes = {
  children: PropTypes.node,
};
