import { useInputValue, useSetInput } from 'commons/ui/useUihook'
import { memo, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { UiInputText } from './InputText'
import SVG from 'commons/styles/svgIcon'
import type { Theme } from 'styles/theme'

const Pagenation = styled.div`
  display: inline-flex;
  position: relative;
  height: 28px;
  margin: 20px 0 12px;
  line-height: normal;
  font-size: 0;
  z-index: 2;
`

const PagenationItem = styled.a`
  display: inline-block;
  position: relative;
  min-width: 28px;
  height: 26px;
  vertical-align: middle;
  line-height: 26px;
  font-size: ${props => (props.theme as Theme).fontSize.text.lg};
  white-space: nowrap;
  color: var(--font-primary);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const LinkPagenation = styled(PagenationItem)<{ active?: boolean }>`
  margin: 0 4px;
  transition: color 0.2s ease-in-out;
  ${props =>
    props.active
      ? css`
          background-color: var(--primary);
          border-radius: 2px;
          color: #fff;
          font-weight: ${props => (props.theme as Theme).fontWeight.bold};
          pointer-events: none;
        `
      : ''}

  &:hover {
    color: var(--primary);
  }
`

const MovePagenation = styled(PagenationItem)`
  overflow: hidden;
  padding: 0;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-position: center;
`

const Prev = styled(MovePagenation)<{ disabled?: boolean }>`
  ${props =>
    props.disabled
      ? css`
          background-image: url(${SVG.NextArrow('#999')});
          transform: rotate(180deg);
          pointer-events: none;
        `
      : css`
          background-image: url(${SVG.NextArrow('#424242')});
          transform: rotate(180deg);
          &:hover {
            opacity: 0.3;
          }
        `}
`

const Next = styled(MovePagenation)<{ disabled?: boolean }>`
  ${props =>
    props.disabled
      ? css`
          background-image: url(${SVG.NextArrow('#999')});
          pointer-events: none;
        `
      : css`
          margin-left: 10px;
          background-image: url(${SVG.NextArrow('#424242')});
          &:hover {
            opacity: 0.3;
          }
        `}
`

export interface IProps {
  current: number
  total: number
  change?: (page: number) => void
}

function Pagelable(props: IProps): JSX.Element {
  const temp = []
  for (let i = 0; i < (props.total < 10 ? props.total : 10); i++) {
    temp.push(
      i +
        (props.total <= 10
          ? 0
          : props.current - 4 > 0
          ? props.current - 4 > props.total - 10
            ? props.total - 10
            : props.current - 4
          : 0) +
        1,
    )
  }
  const goPage = useCallback(
    (disabled: boolean, idx: number) => {
      if (disabled !== true && props.change) {
        props.change(idx - 1)
      }
    },
    [props],
  )
  return (
    <Pagenation>
      <Prev disabled={props.current === 0} onClick={goPage.bind(null, props.current === 0, props.current)} />
      {temp.map((item, idx) => (
        <LinkPagenation
          key={idx}
          active={item - 1 === props.current}
          onClick={goPage.bind(null, item - 1 === props.current, item)}
        >
          {item}
        </LinkPagenation>
      ))}
      <Next
        disabled={props.total === 0 || props.current === props.total - 1}
        onClick={goPage.bind(null, props.total === 0 || props.current === props.total - 1, props.current + 2)}
      />
    </Pagenation>
  )
}
Pagelable.defaultProps = {
  current: 0,
  total: 0,
}
export default memo(Pagelable)

export interface IUiProps extends IProps {
  id: string
}

export enum UiPagelableType {
  Current = '_current',
  Total = '_total',
}

export function UiPagelable(props: IUiProps) {
  const currentValue = useInputValue(props.id + UiPagelableType.Current)
  const totalValue = useInputValue(props.id + UiPagelableType.Total)
  const currentChange = useSetInput(props.id + UiPagelableType.Current)
  const change = (page: number) => {
    currentChange.changeValue(page.toString())
    if (props.change) {
      props.change(page)
    }
  }
  return (
    <>
      <UiInputText id={props.id + UiPagelableType.Current} init={props.current.toString()} hidden={true} />
      <UiInputText id={props.id + UiPagelableType.Total} init={props.total.toString()} hidden={true} />
      <Pagelable
        current={currentValue.inputTextValue ? Number(currentValue.inputTextValue) : props.current}
        total={totalValue.inputTextValue ? Number(totalValue.inputTextValue) : props.total}
        change={change}
      />
    </>
  )
}
