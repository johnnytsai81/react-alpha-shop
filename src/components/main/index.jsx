import { useState } from 'react';
import "../../style/app.css";
import { ProgressControl } from "./progressControl";
import { StepProgress } from "./stepProgress";
import { StepOne } from "./step/StepOne";
import { StepTwo } from "./step/StepTwo";
import { StepThree } from "./step/StepThree";
import { Cart } from "./cart";

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

export default function Main() {
  const [index, setIndex] = useState(0)
  
  return (
    <MainStyle>
      <LeftContainer>
        <h2 className="register-title">結帳</h2>
        <StepProgress index={index} setIndex={setIndex}/>
        {index === 0 && <StepOne />}
        {index === 1 && <StepTwo />}
        {index === 2 && <StepThree />}
        <ProgressControl index={index} setIndex={setIndex}/>
      </LeftContainer>
      <RightContainer>
        <Cart />
      </RightContainer>
    </MainStyle>
  )
}