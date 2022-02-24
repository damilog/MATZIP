import StarRating from 'components/common/StarRating';
import styled from 'styles/themedComponents';

const ReviewInput = () => {
  return (
    <Layout>
      <div>
        <StarRating rating={3} controlled={true} />
      </div>
      <Input placeholder="리뷰를 입력해주세요" />
      <SubmitButton>등록</SubmitButton>
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
