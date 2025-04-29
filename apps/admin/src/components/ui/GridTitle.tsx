import React from 'react'
import styled from 'styled-components'
import { ListTitleBox, Title } from 'styles/components'

const ListOption = styled.div`
  & > * {
    margin-left: 5px;
    &:first-child {
      margin-left: 0px;
    }
  }
`

export interface IProps {
  title: string
  children?: React.ReactNode
}

function GridTitle(props: IProps): JSX.Element {
  return (
    <ListTitleBox>
      <Title size="md" mgBottom={0}>
        {props.title}
      </Title>
      <ListOption>{props.children}</ListOption>
    </ListTitleBox>
  )
}
export default GridTitle
