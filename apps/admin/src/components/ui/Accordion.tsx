import { commonSVG } from '@ecommerce/commons'
import { memo, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, Title } from '../../styles/components'
import type { Color } from '../../styles/stylesVo'

const AccordionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 100%;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  background-color: var(--body-background);

  > button > div > strong {
    margin-right: 4px;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`
const ToggleIcon = styled.div<{ active: boolean }>`
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: url(${commonSVG.DownArrow('#484848')}) no-repeat center center;
    background-size: 24px;
    border: none;
    transform: ${props => (props.active ? 'rotate(180deg)' : 'rotate(0 deg)')};
    transition: transform 0.2s;
  }
`
const ToggleBtn = styled.button`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--body-background);
    border: none;
    > h3 {
      margin: 0;
    }
    > p {
      margin-left: 15px;
    }
  }
`
const ToggleContents = styled.article<{ active: boolean }>`
  width: 100%;
  margin-top: ${props => (props.active ? '10px' : '0')};
  max-height: ${props => (props.active ? '100%' : '0')};
  overflow: ${props => (props.active ? 'none' : 'hidden')};

  > :not(:last-of-type) {
    margin-bottom: 14px;
  }
`

interface IAccordionData {
  title: string
  element?: JSX.Element
  info?: { desc: string; color?: Color }
  visible?: boolean
  state?: boolean
}

interface IAccordionProps {
  data: Array<IAccordionData>
  closeAll?: boolean
}

const AccordionContents: React.FC<{
  contents: IAccordionData
  closeAll: boolean
}> = ({ contents, closeAll }) => {
  const [isOpen, setIsOpen] = useState<boolean>(closeAll ? true : false)
  const state = contents.state

  const openHandler = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  useEffect(() => {
    setIsOpen(closeAll ? true : false)
  }, [closeAll])

  useEffect(() => {
    if (state) {
      setIsOpen(state)
    }
  }, [])
  return (
    <>
      <ToggleBtn onClick={openHandler}>
        <div>
          <Title size="xsm" as={'strong'} mgBottom={0}>
            {contents.title}
          </Title>
          <Text size="sm" color={contents.info?.color ? contents.info.color : 'description'} as="span">
            {contents.info?.desc}
          </Text>
        </div>

        <ToggleIcon active={isOpen} />
      </ToggleBtn>
      <ToggleContents active={isOpen}>{contents.element}</ToggleContents>
    </>
  )
}

const Accordion: React.FC<IAccordionProps> = ({ data, closeAll }) => {
  return (
    <>
      {data
        .filter(item => (item.visible === undefined ? true : item.visible))
        .map((item, Idx) => (
          <AccordionWrapper key={Idx}>
            <AccordionContents contents={item} closeAll={closeAll as boolean} />
          </AccordionWrapper>
        ))}
    </>
  )
}

export default memo(Accordion)
