import styled from 'styled-components';
import {progressBtn} from './ProgressControl';
import {ReactComponent as RightArrow} from '../../../icons/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg';

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

export function ProgressControl(props) {
  let index = props.index
  let setIndex = props.setIndex

  let hasPrev = index > 0;
  let hasNext = index < progressBtn.length - 1;

  function btnPrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function btnNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let step = progressBtn[index];

  return (
    <Control>
      <section className="button-group" data-phase={step.phase}>
        <button className="prev cursor-point" onClick={btnPrevClick} disabled={!hasPrev} alt="">
          <LeftArrow disabled={!hasPrev}></LeftArrow>
          {step.prev}
        </button>
        <button className="next cursor-point" onClick={btnNextClick} disabled={!hasNext} alt="">
          {step.next}
          <RightArrow disabled={!hasPrev}></RightArrow>
        </button>
      </section>
    </Control>
  )
}