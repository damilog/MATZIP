import styled from 'styles/themedComponents';

const Footer = () => {
  return (
    <FooterLayout>
      <p>Copyright © 2022 11st MATZIP All rights reserved.</p>
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export default Footer;
