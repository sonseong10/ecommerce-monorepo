import SVG from 'commons/styles/svgIcon'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ElementGroup, Text, Title } from 'styles/components'
import type { Color } from 'styles/stylesVo'

const AccordionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  border: 1px solid var(--border-dark);
  border-radius: 10px;
  background-color: var(--body-background);

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`
const ToggleIcon = styled.div<{ active: boolean }>`
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: url(${SVG.DownArrow('#25282b')}) no-repeat center center;
    background-size: 28px;
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
        <ElementGroup.Row>
          <Title size="xsm" as="h4">
            {contents.title}
          </Title>
          <Text size="sm" color={contents.info?.color ? contents.info.color : 'description'}>
            {contents.info?.desc}
          </Text>
        </ElementGroup.Row>

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

export default React.memo(Accordion)
