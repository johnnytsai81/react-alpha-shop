import styled from 'styled-components';

const FooterStyle = styled.Footer`
  max-width: 80%;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid #eee;
`

const Footer = () => {
  return (
    <FooterStyle>
      我是Footer
    </FooterStyle>
  )
};

export default Footer;