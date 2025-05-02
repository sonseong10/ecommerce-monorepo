import type { IGrideCell } from '@ecommerce/commons'
import { useGridCheckBox } from '@ecommerce/commons'
import { useNavigate } from 'react-router-dom'
import { CellLink, ElementGroup, Text } from '../../../styles/components'
import Button from '../Button'
import CheckBox from '../CheckBox'
import moment from 'moment'
import styled from 'styled-components'

/**
 * 체크박스 셀
 * @param props
 * @returns
 */
export function GridCheckCell(props: IGrideCell<[boolean]>): JSX.Element {
  const change = (value: boolean) => {
    props.change(props.position, [value])
  }
  return (
    <>
      {props.data.map((item, idx) => (
        <CheckBox key={idx} onlyBox name="gridCheckbox" change={change} value={item} />
      ))}
    </>
  )
}

/**
 * 체크박스 셀
 * @param props
 * @returns
 */
export function GridUiCheckCell(props: IGrideCell<[string, boolean]>): JSX.Element {
  const { checkValue, changeCheck } = useGridCheckBox(props.data[0], false, (value: boolean) => {
    props.change(props.position, [props.data[0], value])
  })
  return (
    <>
      <CheckBox onlyBox name="gridCheckbox" change={changeCheck} value={checkValue} />
    </>
  )
}

export function GridLinkCell(props: IGrideCell<string[]>): JSX.Element {
  if (props.link) {
    const index = typeof props.link.paramidx === 'number' ? [props.link.paramidx] : props.link.paramidx
    const link = `${props.link?.url}/${index.map(i => props.data[i]).join('/')}`
    return (
      <>
        <CellLink to={link} target={props.link.target ? props.link.target : '_self'}>
          {props.data[props.link.text ? props.link.text : 0]}
        </CellLink>
      </>
    )
  } else {
    return <></>
  }
}

export function GridButtonCell(props: IGrideCell<string[]>): JSX.Element {
  const navigate = useNavigate()
  const onClickHandler = () => {
    switch (props.buttonOption?.eventType) {
      case 'link':
        if (props.buttonOption?.link) {
          const index =
            typeof props.buttonOption.link.paramidx === 'number'
              ? [props.buttonOption.link.paramidx]
              : props.buttonOption.link.paramidx
          const link = `${props.buttonOption.link?.url}/${index.map((i: number) => props.data[i]).join('/')}`
          navigate(link)
        }
        break
      case 'delete':
        //TODO: Delete 구현
        // console.log("delete");
        break
      case 'popup':
        //TODO: Popup 구현
        // console.log("popup");

        break
      default:
        if (props.buttonOption?.change) {
          props.buttonOption.change()
        }
        break
    }
  }
  return <Button {...props.buttonOption} onClick={onClickHandler} />
}

export function GridWrapCell(props: IGrideCell<[string]>): JSX.Element {
  return <p style={{ whiteSpace: 'normal' }}>{props.data[0]}</p>
}

export function GridLocalStringCell(props: IGrideCell<[string | number]>): JSX.Element {
  return <p>{Number(props.data[0]).toLocaleString()}</p>
}

/**
 * 섬네일 셀
 * @param props
 * @returns
 */
export function GridThumbnailCell(props: IGrideCell<[string]>) {
  return (
    <>
      <img
        src={props.data[0]}
        alt="섬네일"
        width="105px"
        height="70px"
        onError={e => {
          e.currentTarget.src = import.meta.env.PUBLIC_URL + '/images/logo_ad.svg'
          e.currentTarget.style.backgroundColor = '#CD3932'
          e.currentTarget.style.padding = '8px'
        }}
      />
    </>
  )
}

const Title = styled(Text)`
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  white-space: normal;
  -webkit-box-orient: vertical;
`

const Description = styled(Text)`
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 2;
  white-space: normal;
  -webkit-box-orient: vertical;
`

const InfoList = styled.dl`
  display: flex;
  margin: 0;
  dt {
    position: relative;
    visibility: hidden;
    width: 1px;
    height: 1px;
    z-index: -10;
    margin: 0;
  }

  div:not(:last-of-type)::after {
    display: inline-block;
    width: 1px;
    height: 13px;
    margin: 0 4px;
    background-color: var(--font-disabled);
    content: '';
  }
`

export function GridContentInfoCell(props: IGrideCell<string[]>) {
  return (
    <>
      <Title align="left">{props.data[1]}</Title>
      <Description align="left" color="disabled">
        {props.data[2]}
      </Description>
      <InfoList>
        <ElementGroup.Row>
          <dt>매체명</dt>
          <dd>{props.data[3]}</dd>
        </ElementGroup.Row>
        <ElementGroup.Row>
          <dt>카테고리</dt>
          <dd>{props.data[4]}</dd>
        </ElementGroup.Row>
        <ElementGroup.Row>
          <dt>생성일</dt>
          <dd>{moment(props.data[5]).format('YYYY-MM-DD')}</dd>
        </ElementGroup.Row>
      </InfoList>
    </>
  )
}

export function GridADLinkCell(props: IGrideCell<[string]>) {
  return (
    <Button
      iconName={'PC'}
      iconPosition="center"
      $btnType="ghost"
      $btnSize="md"
      onClick={() => window.open(props.data[0])}
    />
  )
}
