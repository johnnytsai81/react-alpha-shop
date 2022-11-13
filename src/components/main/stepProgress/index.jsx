import styled from 'styled-components';
import {ReactComponent as CheckIcon} from '../../../icons/check.svg';

const ProgressStyle = styled.section`
  display:flex;
  .progress-wrap{
    display:contents;
  }
`

const ProgressIcon = styled.span`
  color: var(--grey-300);
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    border: 1px solid var(--grey-300);
    border-radius: 30px;
  }
  &[data-active="true"]{
    color: var(--gray-800);
    &::before{
      border: 1px solid var(--grey-800);
    }
  }
  .text{
    ${props => (props.index > props.order - 1 ? 'display:none' : 'display:block')};
  }
  .check-icon{
    z-index: 2;
    position: absolute;
    ${props => (props.index > props.order - 1 ? 'display:block' : 'display:none')};
  }
`

function ProgressGroup (props) {
  let content = props.content
  let phase = props.phase
  let order = props.order
  let index = props.index
  // 改變樣式
  let active = index > order - 2;

  return (
    <span className="progress-wrap">
      <span className="progress-group" data-phase={phase}>
        <ProgressIcon className="progress-icon" data-active={active} order={order} index={index}>
          <CheckIcon className="check-icon" />
          <span className="text">{content.text}</span>
        </ProgressIcon>
        <span className="progress-label">{content.label}</span>
      </span>
      <span className="progress-bar" data-order={phase}></span>
    </span>
  );
}


export function StepProgress(props) {
  let index = props.index

  return (
    <ProgressStyle className="progress-container">
      <ProgressGroup content={{ text: '1', label: '寄送地址' }} phase={'address'} order={'1'} index={index}/>
      <ProgressGroup content={{ text: '2', label: '運送方式' }} phase={'shipping'} order={'2'} index={index}/>
      <ProgressGroup content={{ text: '3', label: '付款資訊' }} phase={'credit-card'} order={'3'} index={index}/>
    </ProgressStyle>
  )
}
