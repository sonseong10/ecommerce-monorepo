import { UiInputText } from '../../../components/ui/InputText'
import Button from '../../../components/ui/Button'
import { ElementGroup, Title } from '../../../styles/components'
import styled from 'styled-components'
import type { IGrideCell } from '@ecommerce/commons'
import { Grid } from '@ecommerce/commons'
import { GridButtonCell } from '../../../components/ui/grid/GridCell'
import { useInitMember } from './store/manageHook'

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

function MemberList() {
  const data = useInitMember()

  return (
    <Grid
      data={data}
      headerInfo={{
        fixed: 'calc(100vh - 240px)',
      }}
      setting={[
        { header: '성명', id: ['name'], width: '120px' },
        { header: '직위', id: ['rank'], width: '80px' },
        { header: '직무', id: ['team'], width: '100px' },
        {
          header: '근무 상태',
          id: ['login'],
          element: GridStateCell,
          width: '100px',
        },
        { header: '이메일', id: ['email'], width: 'auto' },
        { header: '전화번호', id: ['phone'], width: '160px' },
        { header: '유선전화', id: ['telephone'], width: '160px' },
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
              url: `/admin/member/detail`,
              paramidx: 0,
            },
          },
          width: '100px',
        },
      ]}
      layoutOverflow
    />
  )
}

function MemberManage() {
  return (
    <>
      <ElementGroup.Row flexContent="between">
        <Title size="md" weight="medium">
          직원검색
        </Title>
        <ElementGroup.Row flexContent="end">
          <UiInputText id="keyword" placeholder="직원이름 검색" />
          <Button text="검색" btnSize="xsm" />
        </ElementGroup.Row>
      </ElementGroup.Row>

      <MemberList />
    </>
  )
}

export default MemberManage
