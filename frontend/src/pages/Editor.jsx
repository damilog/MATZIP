import styled from 'styles/themedComponents';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import EditorForm from 'components/EditorForm';

const Editor = () => {
  return (
    <>
      <HeaderLayout>
        <Header hasBackButton={true} />
      </HeaderLayout>
      <MainLayout>
        <TitleLayer>리뷰 작성</TitleLayer>
        <EditorForm />
      </MainLayout>
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
const MainLayout = styled.main`
  padding-bottom: 12rem;
  background-color: ${({ theme }) => theme.colors.gray.x_light};
`;

const TitleLayer = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 9rem;
  padding: 20px;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 25px;
`;

export default Editor;
