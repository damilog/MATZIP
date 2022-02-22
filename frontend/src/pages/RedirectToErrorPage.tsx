import { Link } from 'react-router-dom';
import styled from 'styles/themedComponents';

const RedirectToErrorPage = () => {
  return (
    <>
      <MainLayer>
        <Title>페이지를 찾지 못했습니다.</Title>
        <SubText>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</SubText>
        <LinkLayer>
          <Link to="/">메인으로 이동하기</Link>
        </LinkLayer>
      </MainLayer>
    </>
  );
};

const MainLayer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 2.9rem;
  font-weight: bold;
`;

const SubText = styled.div`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const LinkLayer = styled.div`
  padding: 20px 0;
  font-size: 2.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

export default RedirectToErrorPage;