import { HiArrowLeft } from 'react-icons/hi';
import { BackButton } from './BackBtn.styled';
import PropTypes from 'prop-types';

const BackBtn = ({ to, children }) => {
  return (
    <BackButton to={to}>
      <HiArrowLeft size="24" />
      {children}
    </BackButton>
  );
};
export default BackBtn;
BackBtn.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};
