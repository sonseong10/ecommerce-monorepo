import React from 'react'

import type { ICardVo } from 'types/grobal-type'
import Grid from 'commons/ui/grid/Grid'
import type { IGrideCell } from 'commons/ui/grid/GridVo'
import { GridButtonCell } from 'components/ui/grid/GridCell'
import styled from 'styled-components'

interface IMemberListProps {
  cards?: {
    [key: string]: ICardVo
  }
  searchValue?: string
  dark: boolean
}

const Badge = styled.span<{ state: boolean }>`
  background-color: ${props => (props.state ? '#35ef2830' : '#dfdfdf30')};
  color: ${props => (props.state ? '#1eaf14' : '#525252')};
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
`

function GridStateCell({ data }: IGrideCell<[boolean]>) {
  return <Badge state={data[0]}>{data[0] ? '근무중' : '오프라인'}</Badge>
}

const MemberList = ({ cards }: IMemberListProps) => {
  const data = cards ? Object.values(cards).map((card, index) => ({ ...card, code: Object.keys(cards)[index] })) : []
  return (
    <Grid
      data={data}
      headerInfo={{
        fixed: 'calc(100vh - 240px)',
      }}
      setting={[
        { header: '성명', id: ['name'], width: '120px' },
        { header: '직위', id: ['rank'], width: '80px' },
        { header: '직무', id: ['team'], width: '80px' },
        { header: '근무 상태', id: ['login'], element: GridStateCell, width: '80px' },
        { header: '이메일', id: ['email'], width: '240px' },
        { header: '전화번호', id: ['phone'], width: '130px' },
        { header: '유선전화', id: ['telephone'], width: '130px' },
        {
          header: '상세',
          id: ['code'],
          element: GridButtonCell,
          button: {
            iconName: 'Link',
            iconPosition: 'center',
            thin: true,
            color: 'primary',
            eventType: 'link',
            btnSize: 'xsm',
            link: {
              url: `/admin/detail`,
              paramidx: 0,
            },
          },
          width: 'auto',
        },
      ]}
      layoutOverflow
    />
  )
}

export default MemberList
