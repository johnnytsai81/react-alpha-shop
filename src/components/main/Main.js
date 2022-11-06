
import "../../style/app.css";
import { ProgressControl } from "./ProgressControl";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepProgress } from "./StepProgress";
import { Cart } from "./Cart";

import styled from 'styled-components';
// 引用斷點
import { device } from '../../constants/style';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 100%;
  


  @media ${device.tabletL} {
    grid-template-columns: 6fr 5fr;
    gap: 3rem;
  }

  .register-title{
    font-size: 2rem;
    font-weight: 600;
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
      <div className="left-Container">
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
      </div>
      <div className="right-Container">
        <Cart />
      </div>
    </MainStyle>
  );
}