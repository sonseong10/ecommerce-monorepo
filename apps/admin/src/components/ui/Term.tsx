import React, { useCallback } from 'react'
import SelectBox, { UiSelectBox } from './SelectBox'
import { ElementGroup } from 'styles/components'
import DateOptionGroup, { UiDateOptionGroup } from './DateOptionGroup'
import type { IRadioItem } from './RadioGroup'

interface ITermProp {
  state?: number
  start?: string
  end?: string
  onlyDate?: boolean
  change?: (state?: number, start?: string, end?: string) => Promise<void> | void
  selectOptions: Array<{ text: string; value: string }>
}

function Term(props: ITermProp): JSX.Element {
  const dateSelectHandler = useCallback(
    (select?: number) => {
      if (props.change) {
        props.change(select, props.start, props.end)
      }
    },
    [props.state, props.start, props.end],
  )
  const dateChange = useCallback(
    (start?: string, end?: string) => {
      if (props.change) {
        props.change(props.state, start, end)
      }
    },
    [props.state],
  )
  return (
    <ElementGroup.Row flexWrap>
      <SelectBox data={props.selectOptions} select={props.state} change={dateSelectHandler} />
      <DateOptionGroup start={props.start} end={props.end} onlyDate={props.onlyDate} change={dateChange} />
    </ElementGroup.Row>
  )
}

export default React.memo(Term)

interface IUiTermProp {
  id: string
  onlyDate?: boolean
  selectOptions?: Array<{ text: string; value: string }>
  list?: Array<IRadioItem>
  callback?: (select: string | number) => {
    startDate: string
    endDate: string
  }
  init?: number
  dataInit?: { start?: string; end?: string }
  selectVisible?: boolean
}

export enum UiTermType {
  Select = '_selectbox',
  DateGroup = '_dategroup',
  Start = '_dategroup_start',
  End = '_dategroup_end',
  Radio = '_dategroup_radio',
}

export function UiTerm(props: IUiTermProp): JSX.Element {
  return (
    <ElementGroup.Row flexWrap>
      {props.selectVisible !== undefined
        ? props.selectVisible
        : true && (
            <UiSelectBox
              id={props.id + UiTermType.Select}
              data={props.selectOptions ? props.selectOptions : []}
              init={props.init}
            />
          )}
      <UiDateOptionGroup
        id={props.id + UiTermType.DateGroup}
        onlyDate={props.onlyDate}
        callback={props.callback}
        list={props.list}
        dataInit={props.dataInit}
      />
    </ElementGroup.Row>
  )
}
