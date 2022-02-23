import styled from 'styles/themedComponents';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PlaceHeader = () => {
  return (
    <HeaderLayout>
      <BackButton />
      <Title>루피네 한식당</Title>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  position: sticky;
  top: -10px;
  z-index: 9;
  width: 100vw;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: gray;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const BackButton = styled(ArrowBackIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  cursor: pointer;
`;

export default PlaceHeader;
