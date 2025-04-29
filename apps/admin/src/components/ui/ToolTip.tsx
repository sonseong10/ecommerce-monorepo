import React from 'react'
import styled, { css } from 'styled-components'
import { ElementGroup, Text } from 'styles/components'

const ToolTipWrap = styled.div`
  position: relative;

  &:hover {
    article {
      visibility: visible;
    }
  }
`

const ToolTipIcon = styled.i`
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  margin: 0 4px;
  border: 1px solid var(--font-primary);
  border-radius: 7px;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    content: 'i';
    transform: translate(-50%, -50%);
    font-size: 6px;
    font-weight: 400;
  }
`

const ToolTipBox = styled.article<{ position?: string }>`
  position: absolute;
  padding: 10px 8px;
  min-width: 240px;
  border: 1px solid var(--border-dark);
  border-radius: 4px;
  background-color: var(--bg-form);
  box-shadow: 2px 4px 4px var(--border-hover);
  visibility: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-width: 6px;
    border-style: solid;
  }

  ${props => {
    switch (props.position) {
      case 'top':
        return css`
          left: 50%;
          top: 24px;
          transform: translateX(-50%);
          &::before,
          &::after {
            top: -13px;
            left: 50%;
            border-color: transparent transparent var(--border-dark) transparent;
            transform: translateX(-50%);
          }

          &::after {
            top: -11px;
            border-bottom-color: var(--bg-form);
          }
        `
      case 'left':
        return css`
          top: 50%;
          left: 30px;
          transform: translateY(-50%);
          &::before,
          &::after {
            top: 50%;
            left: -13px;
            border-color: transparent var(--border-dark) transparent transparent;
            transform: translateY(-50%);
          }

          &::after {
            left: -11px;
            border-right-color: var(--bg-form);
          }
        `
      case 'rigth':
        return css`
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          &::before,
          &::after {
            top: 50%;
            right: -13px;
            border-color: transparent transparent transparent var(--border-dark);
            transform: translateY(-50%);
          }

          &::after {
            right: -11px;
            border-left-color: var(--bg-form);
          }
        `
      case 'bottom':
      default:
        return css`
          left: 50%;
          top: -68px;
          transform: translateX(-50%);
          &::before,
          &::after {
            bottom: -12px;
            left: 50%;
            border-color: var(--border-dark) transparent transparent transparent;
            transform: translateX(-50%);
          }

          &::after {
            bottom: -10px;
            border-top-color: var(--bg-form);
          }
        `
    }
  }}

  > p {
    font-weight: 400;
  }
`

export type ToolTipPosition = 'left' | 'rigth' | 'bottom' | 'top'

interface IToolTipProps {
  text: string
  contents: string
  position: ToolTipPosition
}

function ToolTip(props: IToolTipProps): JSX.Element {
  return (
    <ToolTipWrap>
      <ElementGroup.Row flexContent="center" flexAlign="center">
        <ToolTipIcon />
        <span>{props.text}</span>
      </ElementGroup.Row>
      <ToolTipBox position={props.position}>
        <Text size="sm">
          <span dangerouslySetInnerHTML={{ __html: props.contents }} />
        </Text>
      </ToolTipBox>
    </ToolTipWrap>
  )
}
export default ToolTip
