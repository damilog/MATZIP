import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { placeDetailDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import StarRating from 'components/common/StarRating';

const PlaceReview = () => {
  const detailData = useRecoilValue(placeDetailDataAtom);
  const { review } = detailData;

  const Reviews = review?.map(({ id, comment, rating }) => (
    <ReviewList key={id}>
      <div>
        <StarRating rating={rating} />
      </div>
      <DescriptionLayer>{comment}</DescriptionLayer>
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
