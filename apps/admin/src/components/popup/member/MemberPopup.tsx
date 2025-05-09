import { useEffect } from 'react'
import { AbsPopup } from '@ecommerce/commons'
import { PopupType } from '../../../components/popup/PopupType'
import { Grid } from '@ecommerce/commons'
// import type { IGrideCell } from 'commons/ui/grid/GridVo'
import Button from '../../../components/ui/Button'
import { RowButtonGroup, TableContainer, Text } from '../../../styles/components'
import { useSelectorEq } from '@ecommerce/commons'
import { useDispatch } from 'react-redux'
import { rdxSetPopupData } from '@ecommerce/commons'
import styled from 'styled-components'
import { GridNumberCell } from '@ecommerce/commons'
import { useClosePopup, usePopupData } from '@ecommerce/commons'
import { ButtonState } from '@ecommerce/commons'
import type { IMemberPopupReturnData } from './store/memberPopupVo'
import { useMemberList, useRemoveItem } from './store/memberPopupHook'
import type { IGrideCell } from '@ecommerce/commons'
import type { IState } from '../../../store/modules'

function GridAddCell({ data }: IGrideCell<string[]>) {
  const dispatch = useDispatch()

  const { returnData } = useSelectorEq((state: IState) => ({
    returnData: state.popups?.returnData?.[PopupType.MEMBER],
  }))

  const addMember = () => {
    dispatch(
      rdxSetPopupData({
        type: PopupType.MEMBER,
        value: {
          list: returnData
            ? [...returnData.list, { code: data[0], name: data[1], team: data[2], theme: data[3] }]
            : [{ code: data[0], name: data[1], team: data[2], theme: data[3] }],
        },
      }),
    )
  }

  return (
    <Button
      text="추가"
      onClick={addMember}
      $btnSize="xsm"
      disabled={
        returnData ? returnData.list.findIndex((item: IMemberPopupReturnData) => item.code === data[0]) > -1 : false
      }
      thin={true}
    />
  )
}

const ResultListStyle = styled.ul`
  margin-top: 10px;
  max-height: 300px;
  overflow-y: auto;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4px 8px;
    border: 1px solid #d8d8d8;
    font-size: 12px;

    button::before {
      background-size: 10px;
    }
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
`

function ResultList() {
  const { remove, result } = useRemoveItem()

  return (
    <ResultListStyle>
      {result ? (
        result?.map((item: IMemberPopupReturnData) => (
          <li key={item.code}>
            <span>
              {item.team}팀 | {item.name}
            </span>
            <Button
              $iconName="Closed"
              $iconPosition="center"
              $btnType="ghost"
              $btnSize="sm"
              onClick={() => {
                remove(item.code)
              }}
            />
          </li>
        ))
      ) : (
        <></>
      )}
    </ResultListStyle>
  )
}

const HeaderStyle = styled.header`
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 20px;
`
function PopupHeader() {
  return (
    <HeaderStyle>
      <Text size="sm">참조자 추가</Text>
    </HeaderStyle>
  )
}

const ButtonGroupStyle = styled(RowButtonGroup)`
  border-top: 1px solid #d8d8d8;
  padding: 10px 20px;
  margin-top: 0;
`

export function WorkPopupButtonGroup() {
  const { close } = useClosePopup(PopupType.MEMBER)
  return (
    <ButtonGroupStyle $flexContent="center">
      <Button text="취소" thin={true} ellipsis $btnType="border" onClick={() => close(ButtonState.NO)} />
      <Button text="등록" thin={true} ellipsis color="primary" onClick={() => close(ButtonState.OK)} />
    </ButtonGroupStyle>
  )
}

export default function MemberPopup() {
  const memberList = useMemberList()
  const dispatch = useDispatch()
  const { popupDo } = usePopupData<{ list?: IMemberPopupReturnData[] }>(PopupType.MEMBER)

  useEffect(() => {
    if (popupDo?.data?.list) {
      dispatch(
        rdxSetPopupData({
          type: PopupType.MEMBER,
          value: { list: popupDo?.data.list ? popupDo?.data.list : [] },
        }),
      )
    }
  }, [dispatch, popupDo])

  return (
    <AbsPopup type={PopupType.MEMBER} borderShape={4} header={<PopupHeader />}>
      <Grid
        data={memberList ? memberList : []}
        container={TableContainer}
        setting={[
          { header: 'No.', id: ['name'], width: '100px', element: GridNumberCell },
          { header: '성명', id: ['name'], width: 'auto' },
          { header: '부서', id: ['team'], width: '100px' },
          { header: '직급', id: ['rank'], width: '100px' },
          { header: '추가', id: ['code', 'name', 'team', 'theme'], width: '100px', element: GridAddCell },
        ]}
        headerInfo={{ fixed: 'calc(100vh - 800px)' }}
        layoutOverflow
      />

      <ResultList />
    </AbsPopup>
  )
}
