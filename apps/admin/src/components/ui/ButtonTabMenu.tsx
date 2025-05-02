import styled, { useTheme, css } from 'styled-components'
import type { TabType } from '@ecommerce/commons'
import type { Theme } from '../../styles/theme'

const ItemStyle = () => {
  const theme = useTheme() as Theme
  return css`
    border: none;
    background: none;
    font-size: ${theme.fontSize.text.md};
    line-height: 30px;
    color: var(--font-primary);
    transition: font 0.3s;
    width: 58px;
    padding: 2px 0;
    border-radius: 5px;
    border: 1px solid var(--border-primary);
    transition: background-color 0.2s ease-in-out;

    &:disabled {
      color: var(--font-disabled);
      border: 1px solid var(--border-primary);
    }
    &.is-active {
      color: #fff;
      background-color: var(--btn-secondary);
      border: 1px solid var(--btn-secondary);

      span {
        width: 100%;
      }
    }

    &:hover:not(:disabled) {
      color: #fff;
      background-color: var(--btn-secondary);
      border: 1px solid var(--btn-secondary);
    }

    span {
      display: block;
      position: absolute;
      bottom: 3px;
      width: 0;
      height: 7px;
      z-index: -1;
      transition: height 0.3s;
    }
  `
}

const TabWrapper = styled.ul<{ kinds?: TabType }>`
  display: flex;
  position: relative;
`

const List = styled.li<{ kinds?: TabType }>`
  margin: 0 2.5px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Item = styled.button<{ kinds?: TabType }>`
  display: block;
  position: relative;

  ${ItemStyle}
`

function TabList(props: {
  itemText: string
  id?: string
  kinds?: TabType
  active?: string
  subText?: string
  disable?: boolean
  onClick?: (id: string) => void
}): JSX.Element {
  const setActive = () => {
    if (props.onClick && props.id) {
      props.onClick(props.id)
    }
  }
  return (
    <List kinds={props.kinds}>
      <Item
        kinds={props.kinds}
        className={props.id === props.active ? 'is-active' : ''}
        disabled={props.disable ? props.disable : false}
        onClick={setActive}
      >
        {props.itemText}
        <span>{props.subText && props.subText}</span>
      </Item>
    </List>
  )
}

interface ITabListProps {
  id: string
  text: string
  disable?: boolean
}

interface ITabProps {
  list: Array<ITabListProps>
  subText?: string // TabType이 BUTTON일때만 사용
  active?: string
  click?: (id: string) => void
}

function ButtonTabMenu(props: ITabProps): JSX.Element {
  return (
    <>
      <TabWrapper>
        {props.list?.map((item: ITabListProps) => (
          <TabList
            key={item.id}
            id={item.id}
            itemText={item.text}
            disable={item.disable ? item.disable : false}
            active={props.active}
            onClick={props.click?.bind(null, item.id)}
          />
        ))}
      </TabWrapper>
    </>
  )
}

export default ButtonTabMenu
