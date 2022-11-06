import styled from 'styled-components';

const HeaderStyle = styled.header`
  max-width: 80%;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid #eee;
`

const Header = () => {
  return (
    <HeaderStyle>
      我是Header
    </HeaderStyle>
  )
};

export default Header;