import styled from 'styles/themedComponents';
import Header from 'components/common/Header';
import Navigator from 'components/Filter';
import PlaceCard from 'components/PlaceCard';
import Footer from 'components/common/Footer';
import Pagination from '@material-ui/lab/Pagination';

const res = [
  {
    id: 1,
    title: '루피네 한식당',
    content: '갈비찜',
    price: 30000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 4,
  },
  {
    id: 2,
    title: '민철이네 버거집',
    content: '민철버거',
    price: 9000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 5,
  },
  {
    id: 3,
    title: '윤경 카페',
    content: '윤경 라떼',
    price: 5000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 5,
  },
  {
    id: 4,
    title: '지현이네 애견카페',
    content: '사료',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 4,
  },
  {
    id: 5,
    title: '다미 빵집',
    content: '크림빵',
    price: 5000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 5,
  },
  {
    id: 6,
    title: '지원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 4,
  },
  {
    id: 7,
    title: '수원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 3,
  },
  {
    id: 8,
    title: '조원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 4,
  },
  {
    id: 9,
    title: '영원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 3,
  },
  {
    id: 10,
    title: '정원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 3,
  },
  {
    id: 11,
    title: '다원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 3,
  },
  {
    id: 12,
    title: '재원이네 반찬가게',
    content: '반찬 세트',
    price: 10000,
    thumbnail:
      'https://w.namu.la/s/09a0cf2a5bee5446d5a740fcd11e12001af5c926a01419944fefc7abebbb26fd74c9110da6b44700f70162158c4163c5a2d99045d5babb70a376d40fabd7e2de34973df5785e9c5eee4a7c8d56a62306',
    rating: 3,
  },
];
const Home = () => {
  return (
    <>
      <HeaderLayout>
        <Header />
        <Navigator />
      </HeaderLayout>
      <ContentLayer>
        <Grid>
          {res.map((data) => (
            <PlaceCard key={data.id} data={data} />
          ))}
        </Grid>
      </ContentLayer>
      <ContentLayer>
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
