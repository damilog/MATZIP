import { Link } from 'react-router-dom';
import styled from 'styles/themedComponents';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = () => {
  return (
    <Link to="/">
      <BackButtonLayout />
    </Link>
  );
};

const BackButtonLayout = styled(ArrowBackIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  cursor: pointer;
`;

export default BackButton;
