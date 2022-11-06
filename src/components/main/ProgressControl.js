import RightArrow from "../../icons/right-arrow.svg"
import LeftArrow from "../../icons/left-arrow.svg"
import styled from 'styled-components';

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
  }
  
`

function ButtonGroup ({ display, content, phase}) {
  return (
    <section className="button-group" style={{ display: display.all }} data-phase={phase}>
      <button className="prev" style={{ display: display.prev }}>
      <img className="cursor-point" alt="" src={LeftArrow}/>
        {content.prev}
      </button>
      <button className="next" style={{ display: display.next }}>
        {content.next}
        <img className="cursor-point" alt="" src={RightArrow}/>
      </button>
    </section>
  );
}


export function ProgressControl() {
  return (
    <Control>
      <ButtonGroup display={{ all:'flex', next: 'flex', prev: 'none' }} content={{ next: '下一步', prev: '' }} phase={'address'}/>
      <ButtonGroup display={{ all:'none', next: 'flex', prev: 'flex' }} content={{ next: '下一步', prev: '上一步' }} phase={'shipping'}/>
      <ButtonGroup display={{ all:'none', next: 'flex', prev: 'flex' }} content={{ next: '確認下單', prev: '上一步' }} phase={'credit-card'}/>
    </Control>
  )
}