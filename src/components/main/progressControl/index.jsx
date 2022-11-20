import styled from 'styled-components';
import {progressBtn} from './ProgressControl';
import {ReactComponent as RightArrow} from '../../../icons/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg';

import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
// 按鈕控制區塊樣式
const Control = styled.section`
  margin-top: 2rem;
  .button-group{
    display:flex;
    
    button img{
      width:24px;
      height:24px;
    }
    .next{
      gap: 1rem;
    }

    .prev:disabled{
      display:none;
    }
  }
  
`

export function ProgressControl({index,setIndex}) {
  const { handleFormSubmit } = useContext(CartContext)
  function PrevBtn({ setIndex }) {
    return (
      <button className="prev" onClick={() => setIndex(index => index - 1)}>
        <LeftArrow />
        上一步
      </button>
    )
  }

  function NextBtn({ setIndex }) {
    return (
      <button className="next" onClick={() => setIndex(index => index + 1)}>
        下一步
        <RightArrow />
      </button>
    )
  }

  function CompleteBtn() {
    return (
      <button className="next" onClick={handleFormSubmit}>
        確認下單
      </button>
    )
  }

  let step = progressBtn[index];
  return (
    <Control>
      <section className="button-group" data-phase={step.phase}>
        {index === 0 && <NextBtn  setIndex={setIndex} />}
        {index === 1 && <><PrevBtn setIndex={setIndex} /><NextBtn setIndex={setIndex} /></>}
        {index === 2 && <><PrevBtn setIndex={setIndex} /><CompleteBtn /></>}
      </section>
    </Control>
  )
}