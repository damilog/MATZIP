import styled from 'styles/themedComponents';
import logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <Layout>
      <Logo />
    </Layout>
  );
};

const Layout = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
`;

export default Header;
