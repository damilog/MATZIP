import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { placeDataAtom, filterAtom, clickedPlaceIdAtom } from 'store/homeStore';
import styled from 'styles/themedComponents';
import Header from 'components/common/Header';
import Filter from 'components/Filter';
import PlaceCard from 'components/PlaceCard';
import Footer from 'components/common/Footer';
import Pagination from '@material-ui/lab/Pagination';
import API from 'util/API';

const Home = () => {
  const [data, setData] = useRecoilState(placeDataAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

  const fetchData = async () => {
    const data = await API.getPlace();
    const { content } = data;
    const filters = await API.getCategory();

    setData(content);
    setFilter(filters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeaderLayout>
        <Header />
        <Filter data={filter} />
      </HeaderLayout>
      <ContentLayer>
        <Grid>{data && data?.map((data) => <PlaceCard key={data.id} data={data} />)}</Grid>
      </ContentLayer>
      <ContentLayer>
        {/* //TODO:pageCount 보내주면 반영 */}
        <Pagination count={3} />
      </ContentLayer>
      <Footer />
    </>
  );
};

const HeaderLayout = styled.div`
  position: sticky;
  padding-top: 32px;
  top: -32px;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.red.x_light};
`;
const ContentLayer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.gray.x_light};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(3, 1fr);
`;

export default Home;
