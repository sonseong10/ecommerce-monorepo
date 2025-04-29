import styled, { css } from 'styled-components'

const Toggle = styled.button<{ state: boolean }>`
  position: relative;
  border: none;
  width: 74px;
  height: 32px;
  border-radius: 16px;
  background-color: ${props => (props.state ? '#38C1C1' : '#D4D4D4')};

  span {
    display: block;
    font-size: 13.5px;
    line-height: 28px;
  }

  &::before {
    position: absolute;
    top: 50%;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    display: block;
    background-color: ${props => (props.state ? '#fff' : '#989898')};
    content: '';
    transform: translateY(-50%);
    transition: right 0.2s ease-in;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
  }
  ${props => {
    if (props.state) {
      return css`
        &::before {
          right: 4px;
        }
        span {
          margin-left: 10px;
          text-align: left;
          color: #fff;
        }
      `
    } else {
      return css`
        &::before {
          right: 48px;
        }
        span {
          margin-right: 10px;
          text-align: right;
          color: #727272;
        }
      `
    }
  }}
`

interface IToggleButtonProps {
  init: boolean
  change: () => void
}
function ToggleButton({ init, change }: IToggleButtonProps) {
  const stateChange = () => {
    change()
  }
  return (
    <Toggle state={init} onClick={stateChange}>
      <span>{init ? 'ON' : 'OFF'}</span>
    </Toggle>
  )
}

export default ToggleButton
