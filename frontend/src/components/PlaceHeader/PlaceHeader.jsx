import styled from 'styles/themedComponents';
import BackButton from 'components/common/BackButton';

const PlaceHeader = () => {
  return (
    <HeaderLayout>
      <BackButton />
      <Title>루피네 한식당</Title>
      <Description>한식</Description>
      <Description>서울 용산구 한강대로 405 서울역(철도역) </Description>
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
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding-top: 30px;
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export default PlaceHeader;
