
import "../../style/app.css";
import { ProgressControl } from "./ProgressControl";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepProgress } from "./StepProgress";
import { Cart } from "./cart/Cart";

import styled from 'styled-components';
// 引用斷點
import { device } from '../../constants/style';

// main區塊
const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tabletL} {
    flex-direction: row;
    align-items: baseline;
    gap: 3rem;
  }

  .register-title{
    font-size: 2rem;
    font-weight: 600;
  }
`

// 購物車區塊
const LeftContainer = styled.div`
  flex: 7 1 0;
`

const RightContainer = styled.div`
  flex: 5 1 0;
  padding: 3rem;
  border: 1px solid #F0F0F5;
  border-radius: 8px;
  h3{
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom:1rem;
  }
`

const StepDisplay = styled.div`
  display: none;
  ${props => props.step === '1' && `
  display: block;
  `}
`

export default function Main() {
  return (
    <MainStyle>
      <LeftContainer>
        <h2 className="register-title">結帳</h2>
        <StepProgress />
        <StepDisplay step={'1'}>
          <StepOne />
        </StepDisplay>
        <StepDisplay step={'2'}>
          <StepTwo />
        </StepDisplay>
        <StepDisplay step={'3'}>
          <StepThree />
        </StepDisplay>
        <ProgressControl />
      </LeftContainer>
      <RightContainer>
        <Cart />
      </RightContainer>
    </MainStyle>
  );
}