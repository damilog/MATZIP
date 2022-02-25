import { useRecoilValue } from 'recoil';
import { placeDetailDataAtom } from 'store/placeStore';
import styled from 'styles/themedComponents';
import StarRating from 'components/common/StarRating';
import CancelIcon from '@mui/icons-material/Cancel';
import API from 'util/API';

const PlaceReview = ({ placeId }) => {
  const detailData = useRecoilValue(placeDetailDataAtom);
  const { review } = detailData;

  const handleRemoveButtonClick = async (reviewId) => {
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      API.deleteReview(placeId, reviewId);
    }
  };

  const Reviews = review?.map(({ id, comment, rating }) => (
    <ReviewList key={id}>
      <div>
        <StarRating rating={rating} />
      </div>
      <DescriptionLayer>{comment}</DescriptionLayer>
      <RemoveButton onClick={() => handleRemoveButtonClick(id)} />
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

const RemoveButton = styled(CancelIcon)`
  color: ${({ theme }) => theme.colors.gray.light};
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.red.main};
  }
`;

export default PlaceReview;
