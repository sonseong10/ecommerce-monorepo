import styled from 'styled-components'
import type { PositionType } from '@ecommerce/commons'

const ScrollContainer = styled.div<{
  position?: PositionType
  width?: string
  height: number
}>`
  ${props => (props.position ? `position: ${props.position}` : '')};
  ${props => (props.width ? `width: ${props.width}` : '')};
  max-height: ${props => `calc(100% - ${props.height}px)`};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

interface IScrollProps {
  className?: string
  position?: PositionType
  width?: string
  height: number
  children?: React.ReactNode
}

/**
 *
 * @param props.className 클래스명
 * @param props.position div position
 * @param props.width width
 * @param props.height height값을 number로 받아 100%에서 받은 height값을 빼주어 scroll 영역 생성
 * @param props.children 해당 div안에 들어갈 Element
 * @returns
 */
function ScrollDiv(props: IScrollProps): JSX.Element {
  return (
    <ScrollContainer
      width={props.width && props.width}
      height={props.height}
      position={`${props.position ? props.position : 'static'}`}
      className={props.className && props.className}
    >
      {props.children}
    </ScrollContainer>
  )
}

export default ScrollDiv
