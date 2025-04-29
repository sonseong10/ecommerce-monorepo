import React from 'react'
import styled, { css } from 'styled-components'
import { type IUiProps, UiInputText } from './InputText'

const LabelWrap = styled.div<{ label?: LabelProps }>`
  display: flex;
  flex-direction: row;

  label {
    display: block;
    line-height: 34px;
    font-size: 1rem;
    border: 1px solid var(--border-primary);
    border-right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 10px;

    ${props => {
      if (props.label) {
        return css`
          width: ${props.label.width};
          background: ${props.label.background ? props.label.background : '#fafafa'};
        `
      }
    }}
  }

  input {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`

interface LabelProps {
  width?: string
  background?: string
}

interface LabelInputProps extends IUiProps {
  text: string
  className?: string
  label?: LabelProps
}

export function LabelInput(props: LabelInputProps) {
  return (
    <LabelWrap label={props.label} className={props.className}>
      <label>{props.text}</label>
      <UiInputText {...props}></UiInputText>
    </LabelWrap>
  )
}
