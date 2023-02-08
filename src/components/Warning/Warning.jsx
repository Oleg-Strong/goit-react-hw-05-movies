import { WarnTitle } from './Warning.styled';
import PropTypes from 'prop-types';

const Warning = ({ children }) => {
  return <WarnTitle>{children}</WarnTitle>;
};
export default Warning;

Warning.propTypes = {
  children: PropTypes.node,
};
