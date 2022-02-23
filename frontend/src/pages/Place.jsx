import styled from 'styles/themedComponents';
import PlaceHeader from 'components/PlaceHeader';
import PlaceReviewCard from 'components/PlaceReviewCard';
import PlaceReview from 'components/PlaceReview';
import ReviewInput from 'components/ReviewInput';

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
    </>
  );
};

const Main = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGray};
  > div {
    display: flex;
    justify-content: center;
  }
`;

export default Place;
