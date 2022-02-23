import styled from 'styles/themedComponents';
import Header from 'components/common/Header';
import Navigator from 'components/Filter';
import PlaceCard from 'components/PlaceCard';
import Footer from 'components/common/Footer';

const Home = () => {
  return (
    <>
      <HeaderLayout>
        <Header />
        <Navigator />
      </HeaderLayout>
      <MainLayout>
        <Grid>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </Grid>
      </MainLayout>
      <Footer />
    </>
  );
};

const HeaderLayout = styled.div`
  position: sticky;
  padding-top: 32px;
  top: -32px;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.lightRed};
`;
const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(3, 1fr);
`;

export default Home;
