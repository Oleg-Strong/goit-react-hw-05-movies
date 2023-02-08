import { Title } from './Title.styled';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};
export default SectionTitle;

SectionTitle.propTypes = {
  children: PropTypes.node,
};
