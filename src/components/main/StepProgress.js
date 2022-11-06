import styled from 'styled-components';

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
  ${props => props.step === '1' && `
    color: var(--white);
    &::before{
      background-color: var(--grey-800);
      border: 1px solid var(--grey-800);
    }
  `}
`


function ProgressGroup ({ step, content, phase, order}) {
  return (
    <span className="progress-wrap">
      <span className="progress-group" data-phase={phase}>
        <ProgressIcon className="progress-icon" step={step}>
          <span className="text">{content.text}</span>
        </ProgressIcon>
        <span className="progress-label">{content.label}</span>
      </span>
      <span className="progress-bar" data-order={phase}></span>
    </span>
  );
}


export function StepProgress() {
  return (
    <ProgressStyle className="progress-container">
      <ProgressGroup step={'1'} content={{ text: '1', label: '寄送地址' }} phase={'address'} order={'1'}/>
      <ProgressGroup step={'2'} content={{ text: '2', label: '運送方式' }} phase={'shipping'} order={'2'}/>
      <ProgressGroup step={'3'} content={{ text: '3', label: '付款資訊' }} phase={'credit-card'} order={'3'}/>
    </ProgressStyle>
  )
}