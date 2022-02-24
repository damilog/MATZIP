import styled from 'styles/themedComponents';
import PlaceHeader from 'components/PlaceHeader';
import PlaceReviewCard from 'components/PlaceReviewCard';
import PlaceReview from 'components/PlaceReview';
import ReviewInput from 'components/ReviewInput';
import RecommendedPlace from 'components/RecommendedPlace';
import Footer from 'components/common/Footer';

const Place = () => {
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
        <PlaceReview />
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
