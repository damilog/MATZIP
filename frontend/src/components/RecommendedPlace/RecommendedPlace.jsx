import styled from 'styles/themedComponents';
import PlaceCarousel from 'components/common/PlaceCarousel';

const RecommendedPlace = () => {
  return (
    <Layout>
      <Title>
        <span>한식</span> 맛집 둘러보기
      </Title>
      <Main>
        <PlaceCarousel
          next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
          prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        ></PlaceCarousel>
      </Main>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Title = styled.div`
  font-size: 40px;
  padding: 10% 1% 1% 10%;
  > span {
    padding: 0 2px;
    font-weight: bold;
  }
`;

const Main = styled.main`
  padding: 3rem 0;
`;

export default RecommendedPlace;
