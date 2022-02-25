import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { placeDataAtom, filterAtom, pageCountAtom } from 'store/homeStore';
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
  const [pageCount, setPageCount] = useRecoilState(pageCountAtom);

  const fetchData = async () => {
    const data = await API.getPlace();
    const { content, totalPages } = data;

    const filters = await API.getCategory();

    setData(content);
    setPageCount(totalPages - 1);

    setFilter(filters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchDataByPage = async (page) => {
    const { content } = await API.getPlaceWithPage(page);
    setData(content);
  };

  const handlePaginationClick = ({ target }) => {
    const page = target.innerText;
    fetchDataByPage(page);
  };

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
        <Pagination count={pageCount} onClick={handlePaginationClick} />
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
