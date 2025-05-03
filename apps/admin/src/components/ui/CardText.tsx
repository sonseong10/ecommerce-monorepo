import styled, { css } from 'styled-components'

import type { CardTextBoxColor, CardTextIcon } from '@ecommerce/commons'
import { FontWeight, TextAlign, TitleSize } from '../../styles/styleds'
import ToolTip, { type ToolTipPosition } from './ToolTip'
import { ElementGroup } from '../../styles/components'
import type { FontAlignType, FontSizeTitleType, FontWeightType } from '../../styles/stylesVo'
import { memo } from 'react'

const Container = styled.section`
  margin-top: 40px !important;
  margin-bottom: 30px;
`
const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardItem = styled.a`
  margin-right: 35px;
  margin-bottom: 20px;
`
const CardItemInfo = styled.dl<{ isActive: boolean }>`
  position: relative;
  min-width: 190px;
  padding: 15px 20px;
  border: 1px solid var(--border-disabled);
  border-radius: 9px;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.05);
  transition: border 0.3s;

  ${props => {
    if (props.isActive) {
      return css`
        &:hover {
          border: 1px solid var(--border-focus);
          cursor: pointer;
        }
      `
    }
  }}
`

const CardTitle = styled.dt<{
  $iconName?: CardTextIcon | string
  size?: FontSizeTitleType
  $fontWeight?: FontWeightType
  color?: string
  align?: FontAlignType
}>`
  padding: 5px 0;
  /* Font Typography */
  ${TitleSize}
  ${FontWeight};
  ${TextAlign};
  color: ${props => {
      switch (props.color) {
        case 'error':
          return `var(--negative)`
        case 'positive':
          return `var(--positive)`
        case 'success':
          return `var(--success)`
        case 'disabled':
          return `var(--font-disabled)`
        case 'description':
          return `var(--font-grey)`
        default:
          return `var(--font-primary)`
      }
    }}
    /* 타이틀 & 컨텐츠 icon 스타일 */
    ${props =>
      props.$iconName &&
      css`
        display: block;
        padding: 5px 0 5px 40px;
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 30px;
      `};
  background-image: ${props => {
    switch (props.$iconName) {
      case 'ORDER_ALL':
        return `url("/images/icon/icon_all_od.png")`
      case 'PAYMENT_READY':
        return `url("/images/icon/icon_bf_m.png")`
      case 'PRODUCT_READY':
        return `url("/images/icon/icon_bf_sh.png")`
      case 'PURCHASE_CONFIRM':
        return `url("/images/icon/icon_bf_pd.svg")`
      case 'CANCEL_AFTER_PAYMENT':
        return `url("/images/icon/icon_don_count.svg")`
      case 'CANCEL_BEFORE_SYSTEM':
        return `url("/images/icon/icon_don_count.svg")`
      case 'SHIPPING':
        return ` url("/images/icon/icon_ing_sh.svg")`
      case 'SHIPPING_COMPLETE':
        return ` url("/images/icon/icon_sh_done.svg")`
      case 'SHIPPING_READY':
        return ` url("/images/icon/icon_add_nu.svg")`
      default:
        break
    }
  }};
`
const CardContents = styled.dd<{
  $iconName?: string
  $fontWeight?: FontWeightType
  color?: string
  size?: FontSizeTitleType
  align?: FontAlignType
}>`
  /* Font Typography */
  font-family: 'NanumSquare';
  ${TitleSize}
  ${FontWeight};
  ${TextAlign};
  color: ${props => {
    switch (props.color) {
      case 'error':
        return `var(--negative)`
      case 'positive':
        return `var(--positive)`
      case 'success':
        return `var(--success)`
      case 'disabled':
        return `var(--font-disabled)`
      case 'description':
        return `var(--font-grey)`
      default:
        return `var(--font-primary)`
    }
  }};
  //NOTE: 필요 시 아이콘 추가
`

interface ICardTextProps {
  data: Array<{
    title: {
      text: string
      $fontWeight?: FontWeightType
      align?: FontAlignType
      size?: FontSizeTitleType
      color?: string
      $iconName?: CardTextIcon | string
      $iconPosition?: 'before' | 'after' | 'center'
    }
    contents: {
      text: string
      weight?: FontWeightType
      align?: FontAlignType
      size?: FontSizeTitleType
      color?: string
      $iconName?: CardTextIcon | string
      $iconPosition?: 'before' | 'after' | 'center'
      width?: string
    }
    change?: () => void
    toolTip?: { text?: string; position: ToolTipPosition; contents: string }
  }>
  backGroundColor?: CardTextBoxColor
}

function CardText(props: ICardTextProps): JSX.Element {
  return (
    <Container>
      <CardBox>
        {props.data.map((item, idx) => (
          <CardItem key={idx} onClick={item.change}>
            <CardItemInfo isActive={item.change ? true : false}>
              <CardTitle $iconName={item.title.$iconName} $fontWeight={item.title.$fontWeight} color={item.title.color}>
                <ElementGroup.Row>
                  {item.title.text}
                  {item.toolTip && (
                    <ToolTip
                      text={item.toolTip.text !== undefined ? item.toolTip.text : ''}
                      contents={item.toolTip.contents}
                      position={item.toolTip.position}
                    />
                  )}
                </ElementGroup.Row>
              </CardTitle>
              <CardContents
                $iconName={item.contents.$iconName}
                $fontWeight={item.contents.weight}
                color={item.contents.color}
                size={item.contents.size}
                align={item.contents.align}
              >
                {item.contents.text}
              </CardContents>
            </CardItemInfo>
          </CardItem>
        ))}
      </CardBox>
    </Container>
  )
}

export default memo(CardText)
