import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { placeIdAtom } from 'store/placeStore';
import StarRating from 'components/common/StarRating';
import styled from 'styles/themedComponents';
import API from 'util/API';

const ReviewInput = () => {
  const placeId = useRecoilValue(placeIdAtom);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setReview(value);
  };

  const postReview = async (req) => {
    await API.postReview(placeId, req);
    //TODO: 강제 리렌더링 없도록 리팩터링 필요
    window.location.reload();
  };

  const handleReviewSubmit = () => {
    const req = {
      content: review,
      rating,
    };
    postReview(req);
  };

  return (
    <Layout>
      <div>
        <StarRating controlled={true} state={rating} setState={setRating} />
      </div>
      <Input placeholder="리뷰를 입력해주세요" onChange={handleInputChange} />
      <SubmitButton onClick={handleReviewSubmit}>등록</SubmitButton>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;

  > div {
    padding-top: 10px;
    padding-right: 8px;
  }
`;

const Input = styled.input`
  width: 35rem;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

const SubmitButton = styled.button`
  width: 70px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.red.main};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.red.main};
  border-radius: 10px;
  margin-left: 10px;
`;

export default ReviewInput;
