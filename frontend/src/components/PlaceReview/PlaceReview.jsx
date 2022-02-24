import styled from 'styles/themedComponents';
import StarRating from 'components/common/StarRating';

const reviews = [
  {
    id: 1,
    description: '넘 맛있어요~',
    rating: 4,
  },
  {
    id: 2,
    description: '그냥 그래요',
    rating: 3,
  },
  {
    id: 3,
    description: '분위기 좋아요~',
    rating: 5,
  },
];

const PlaceReview = () => {
  const Reviews = reviews.map(({ id, description, rating }) => (
    <ReviewList key={id}>
      <div>
        <StarRating rating={rating} />
      </div>
      <DescriptionLayer>{description}</DescriptionLayer>
    </ReviewList>
  ));

  return <>{Reviews}</>;
};

const ReviewList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

const DescriptionLayer = styled.div`
  min-width: 720px;
  height: 40px;

  margin-bottom: 15px;
  padding: 10px;
`;

export default PlaceReview;
