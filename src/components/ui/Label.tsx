import React from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

const LabelStyle = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  label {
    position: absolute;
    left: 10px;
    top: -12px;
    display: inline-block;
    flex-shrink: 0;
    background-color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 0 4px;
    z-index: 21;
  }
  input {
    height: 38px;
  }

  :hover {
    color: var(--primary);

    & > input:not(:disabled) {
      border-color: var(--primary);
    }
  }
`

interface ILabelProps {
  id?: string
  text: string
  element: ReactNode | JSX.Element
  className?: string
}

function Label(props: ILabelProps): JSX.Element {
  return (
    <LabelStyle className={`${props.className ? props.className : undefined}`}>
      <label htmlFor={props.id}>{props.text}</label>
      {props.element}
    </LabelStyle>
  )
}

export default Label
