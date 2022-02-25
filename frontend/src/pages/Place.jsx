import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { placeDetailDataAtom, placeIdAtom, recommendDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import PlaceHeader from 'components/PlaceHeader';
import PlaceReviewCard from 'components/PlaceReviewCard';
import PlaceReview from 'components/PlaceReview';
import ReviewInput from 'components/ReviewInput';
import RecommendedPlace from 'components/RecommendedPlace';
import Footer from 'components/common/Footer';
import API from 'util/API';
import mlAPI from 'util/mlAPI';

const Place = () => {
  const setData = useSetRecoilState(placeDetailDataAtom);
  const setRecommendData = useSetRecoilState(recommendDataAtom);
  const [placeId, setPlaceId] = useRecoilState(placeIdAtom);

  const { pathname } = useLocation();
  const pathInfos = pathname.split('/');
  const id = pathInfos.pop();
  setPlaceId(id);

  const fetchData = async () => {
    const data = await API.getPlaceDetail(placeId);
    const { items } = await mlAPI.getRecommend(placeId);

    setData(data);
    setRecommendData(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PlaceHeader />
      <Main>
        <div>
          <PlaceReviewCard />
        </div>
        <div>
          <ReviewInput />
        </div>
        <PlaceReview placeId={placeId} />
      </Main>
      <RecommendedPlace />
      <Footer />
    </>
  );
};

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.gray.x_light};
  > div {
    display: flex;
    justify-content: center;
  }
`;

export default Place;
