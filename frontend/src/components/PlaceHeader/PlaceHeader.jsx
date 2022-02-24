import { useRecoilValue } from 'recoil';
import { placeDetailDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import BackButton from 'components/common/BackButton';

const PlaceHeader = () => {
  const { title, category, address } = useRecoilValue(placeDetailDataAtom);
  return (
    <HeaderLayout>
      <BackButton />
      <Title>{title}</Title>
      <Description>{category}</Description>
      <Description>{address}</Description>
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
