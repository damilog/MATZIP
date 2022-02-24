import styled from 'styles/themedComponents';
import logo from 'assets/images/logo.png';
import BackButton from 'components/common/BackButton';

const Header = ({ hasBackButton = false }) => {
  return (
    <Layout>
      {hasBackButton && <BackButton />}
      <Logo />
    </Layout>
  );
};

const Layout = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-bottom: 20px;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
`;

export default Header;
