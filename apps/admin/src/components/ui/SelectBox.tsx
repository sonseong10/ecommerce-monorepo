import { memo, useCallback, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import type { Theme } from '../../styles/theme'
import { WFrom } from '../../styles/styleds'
import { useEffect } from 'react'
import InputText from './InputText'
import { getSearchRegExp, mouseUp } from '@ecommerce/commons'
import { useSelectBox } from '@ecommerce/commons'
import type { IValid } from '@ecommerce/commons'
import { useConfirm } from '../../components/popup/popupHook'
import type { Size } from '../../styles/stylesVo'
import { commonSVG } from '@ecommerce/commons'

const SelectWrapper = styled.div<{ size: Size }>`
  display: inline-flex;
  width: auto;
  text-align: left;
  ${WFrom};
`

const SelectHidden = styled.select`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

const Select2 = styled.span`
  width: 100% !important;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
  width: 89px;
`

const Selection = styled.span``

const Select2Selection = styled.span<{ disable: boolean; theme: Theme }>`
  background-color: ${props => (props.disable ? props.theme.colors.bgForm : '#fff')};
  margin-left: 0;
  display: block;
  cursor: pointer;
  box-sizing: border-box;
`

const Select2Value = styled.span<{
  active: boolean
  selected: boolean
  theme: Theme
  color?: string
}>`
  border: 1px solid ${props => (props.active ? props.theme.colors.borderFocus : props.theme.colors.borderPrimary)};
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding-right: 30px;
  line-height: 34px;
  color: ${props =>
    props.selected ? (props.color ? props.color : props.theme.colors.fontPrimary) : props.theme.colors.fontDisabled};
  padding-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Select2Arrow = styled.span<{ active: boolean }>`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 30px;
  height: 34px;
  background: url(${commonSVG.DownArrow('a8a9aa')}) no-repeat 2px center;
  ${props =>
    props.active
      ? css`
          background-position: 7px center;
          transform: rotate(180deg);
        `
      : ''}
`

const DropDownWapper = styled.span`
  display: block;
  height: auto;
  overflow-y: auto;
  width: 100%;
  max-height: 200px;
  position: absolute;
  left: 0;
  top: 40px;
  border-radius: 4px;
  border: 1px solid var(--border-primary);
  background-color: #fff;
  box-shadow: 2px 3px 8px 0px rgb(0 0 0 / 10%);
  z-index: 20;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

const OptionWrapper = styled.ul`
  cursor: pointer;
`

const OptionItem = styled.li<{
  active: boolean
  check?: boolean
  color?: string
}>`
  display: block;
  width: 100%;
  padding: 8px;
  border: 0;
  text-align: left;
  transition: background 0.2s;
  &:hover {
    background-color: var(--bg-form);
  }
  ${props => {
    if (props.color) {
      return `color: ${props.color}`
    }
    if (props.check) {
      return `&:before {
        display: inline-block;
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 5px;
        vertical-align: middle;
        ${
          props.active
            ? `background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23515355' rx='2'/%3E%3Cpath fill='%23fff' d='M6.167 12.683L2 8.517l1.175-1.175 2.992 2.983L12.492 4l1.175 1.183-7.5 7.5z'/%3E%3C/svg%3E") no-repeat center center;`
            : `background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Crect width='14.5' height='14.5' x='.75' y='.75' fill='%23fff' stroke='%237C7E80' stroke-width='1.5' rx='1.25'/%3E%3C/svg%3E") no-repeat center center;`
        }
      }
      ${
        props.active
          ? `background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23009688' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 9l4.5 4.5L15 6'/%3E%3C/svg%3E") no-repeat right 0.6em center; 
      color: var(--primary)`
          : ''
      }`
    } else {
      if (props.active) {
        return `
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23009688' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 9l4.5 4.5L15 6'/%3E%3C/svg%3E") no-repeat right 0.6em center; 
          color: var(--primary)
        `
      }
      return ``
    }
  }}
`
const ClearIcon = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 30px;
  width: 18px;
  height: 34px;
  border: 0;
  background: url(${commonSVG.Closed('999')}) no-repeat center 54%;
  background-size: 10px;
  font-size: 0;
  text-indent: -9999px;
`

const SelectSearch = styled.div`
  padding: 10px;
  & input {
    width: 100%;
    padding-left: 30px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3E%3Cpath stroke='%23A8A9AA' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.156 14.063c3.262 0 5.906-2.645 5.906-5.907S11.418 2.25 8.157 2.25c-3.262 0-5.906 2.644-5.906 5.906 0 3.262 2.644 5.906 5.906 5.906zM12.332 12.333l3.417 3.417'/%3E%3C/svg%3E")
      no-repeat left 0.6em center;
    &:focus {
      border-color: #7c7e80;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3E%3Cpath stroke='%23515355' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.156 14.063c3.262 0 5.906-2.645 5.906-5.907S11.418 2.25 8.157 2.25c-3.262 0-5.906 2.644-5.906 5.906 0 3.262 2.644 5.906 5.906 5.906zM12.332 12.333l3.417 3.417'/%3E%3C/svg%3E");
    }
  }
`
export interface ISelectBoxProps<T> {
  displayId?: string
  selectType?: 'select' | 'id'
  selectId?: string
  size?: Size
  select?: string | number
  placeholder?: string
  change?: (selected?: number, value?: T | undefined) => Promise<void> | void | Promise<number> | number
  changeId?: (selected?: string, value?: T | undefined) => Promise<void> | void | Promise<string> | string
  onChange?: (selected: string) => void
  disable?: boolean
  search?: boolean
  multiTitle?: string
  data: Array<T>
  isClear?: boolean
  defence?: string
}

function SelectBox<T>(props: ISelectBoxProps<T>): JSX.Element {
  const size = props.size || 'xmd'
  const placeholder = props.placeholder || '선택'
  const disable = props.disable || false
  const search = props.search || false
  const selectType = props.selectType || 'select'
  const [isActive, setActive] = useState(false)
  const confirm = useConfirm()

  const [selected, setSelected] = useState<number | undefined>(
    props.selectType === 'select'
      ? (props.select as number)
      : props.select !== undefined
      ? props.data.findIndex(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value => (value as any)[props.selectId as string] === props.select,
        ) !== -1
        ? props.data.findIndex(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value => (value as any)[props.selectId as string] === props.select,
          )
        : undefined
      : props.select,
  )

  const isClear = props.placeholder !== undefined
  const [clear, setClear] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  let searchReg = getSearchRegExp(searchValue)
  const selectWrapperRef = useRef(null)
  const selectSearchRef = useRef(null)
  const toggleHandler = useCallback(
    (e: React.MouseEvent) => {
      if (!disable) {
        const a = !isActive
        setActive(a)
        setSearchValue('')
        if (e.stopPropagation) {
          e.stopPropagation()
        }
        if (a) {
          mouseUp(selectWrapperRef, setActive, selectSearchRef)
        }
      }
    },
    [isActive, disable],
  )
  const changeSelected = useCallback(
    (idx: number, e: React.MouseEvent) => {
      if (props.defence !== undefined) {
        if (selected === undefined) {
          setActive(false)
          setSelected(idx)
          if (e.stopPropagation) {
            e.stopPropagation()
          }
          return
        }
        confirm(props.defence, bo => {
          if (bo) {
            setActive(false)
            setSelected(idx)
            switch (selectType) {
              case 'select':
                if (props.change) {
                  props.change(idx, props.data[idx])
                }
                break
              case 'id':
                if (props.changeId) {
                  props.changeId(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (props.data[idx] as any)[props.selectId as string] as string,
                    props.data[idx],
                  )
                } else {
                  if (props.change) {
                    props.change(idx, props.data[idx])
                  }
                }
                break
            }
          }
        })
        return
      }
      setActive(false)
      setSelected(idx)
      if (e.stopPropagation) {
        e.stopPropagation()
      }
      if (props.isClear === false) {
        setClear(false)
      } else {
        setClear(true)
      }
      switch (selectType) {
        case 'select':
          if (props.change) {
            props.change(idx, props.data[idx])
          }
          break
        case 'id':
          if (props.changeId) {
            props.changeId(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (props.data[idx] as any)[props.selectId as string] as string,
              props.data[idx],
            )
          } else {
            if (props.change) {
              props.change(idx, props.data[idx])
            }
          }
          break
      }
    },
    [confirm, props, selectType, selected],
  )
  const clearHandler = useCallback(() => {
    setSelected(undefined)
    setClear(false)
    if (props.changeId) {
      props.changeId()
    }
    if (props.change) {
      props.change()
    }
  }, [props])
  const searchHandler = useCallback((e: string) => {
    setSearchValue(e)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    searchReg = getSearchRegExp(e)
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getText = (item: any) => {
    switch (typeof item) {
      case 'object':
        if (props.displayId !== undefined) {
          return item[props.displayId]
        } else {
          return item.text
        }
      default:
        return item
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getColor = (item: any) => {
    switch (typeof item) {
      case 'object':
        return item.color
      default:
        return item
    }
  }
  const selectedValue = () => {
    if (selected === undefined) {
      return placeholder
    } else {
      return getText(props.data[selected])
    }
  }

  useEffect(() => {
    if (props.select === undefined && selected !== undefined) {
      setSelected(undefined)
      setClear(false)
    } else {
      let idx = undefined

      switch (selectType) {
        case 'select':
          setSelected(props.select as number)
          break
        case 'id':
          idx = props.data?.findIndex(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value => (value as any)[props.selectId as string] === props.select,
          )
          // console.log(idx, props.data, props.select, props.selectId);
          if (idx > -1) {
            setSelected(idx)
          } else {
            setSelected(undefined)
          }
          break
        default:
          props.data.findIndex(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value => (value as any)[props.selectId as string] === props.select,
          )
          // setSelected(props.select as Array<number>);
          break
      }
    }
  }, [props.select, props.data, props.selectId, selected, selectType])

  return (
    <SelectWrapper size={size} ref={selectWrapperRef}>
      <SelectHidden>
        {props.data?.map((item, idx) => (
          <option key={idx} value={getText(item)}>
            {getText(item)}
          </option>
        ))}
      </SelectHidden>
      <Select2>
        <Selection>
          <Select2Selection disable={disable} onClick={toggleHandler}>
            {isClear ? clear ? <ClearIcon onClick={clearHandler} /> : '' : ''}
            <Select2Value
              active={isActive}
              selected={selected !== undefined}
              color={selected !== undefined ? getColor(props.data[selected]) : undefined}
            >
              {selectedValue()}
            </Select2Value>
            <Select2Arrow active={isActive}></Select2Arrow>
          </Select2Selection>
        </Selection>
        {isActive ? (
          <DropDownWapper>
            {search ? (
              <SelectSearch ref={selectSearchRef}>
                <InputText type="text" change={searchHandler} value={searchValue} placeholder="검색어 입력" />
              </SelectSearch>
            ) : (
              ''
            )}
            <OptionWrapper>
              {props.data?.map((item, idx) =>
                searchReg.test(getText(item)) ? (
                  <OptionItem
                    key={idx}
                    value={getText(item)}
                    active={selected === idx}
                    onClick={changeSelected.bind(null, idx)}
                    color={getColor(item)}
                  >
                    {getText(item)}
                  </OptionItem>
                ) : (
                  ''
                ),
              )}
            </OptionWrapper>
          </DropDownWapper>
        ) : (
          ''
        )}
      </Select2>
    </SelectWrapper>
  )
}
export default memo(SelectBox)

export interface IUiSelectBoxProps<T> {
  id: string
  displayId?: string
  selectType?: 'select' | 'id'
  selectId?: string
  size?: Size
  placeholder?: string
  disable?: boolean
  search?: boolean
  multiTitle?: string
  data: Array<T>
  isClear?: boolean
  valid?: IValid<string | number | undefined>
  init?: string | number
  change?: (value?: string | number) => void //캠페인 템플릿 변경될때 인식하기 위한 변수
}

export function UiSelectBox<T>(props: IUiSelectBoxProps<T>): JSX.Element {
  const { selectValue, changeValue } = useSelectBox(props.id, props.valid, props.init)

  const changeFunc = (select?: number, value?: unknown) => {
    changeValue(select as string | number, value as string)
    if (props.change) {
      props.change(select)
    }
  }

  const changeIdFunc = (select?: string, value?: unknown) => {
    changeValue(select as string | number, value as string)
    if (props.change) {
      props.change(select)
    }
  }

  return <SelectBox {...props} select={selectValue} change={changeFunc} changeId={changeIdFunc} />
}
