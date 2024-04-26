import Button from 'components/ui/Button'
import { UiDateOptionGroup } from 'components/ui/DateOptionGroup'
import { UiInputText } from 'components/ui/InputText'
import { UiInputTextArea } from 'components/ui/InputTextArea'
import OptionGrid from 'components/ui/OptionGrid'
import { UiSelectBox } from 'components/ui/SelectBox'
import React from 'react'
import { ElementGroup, RowButtonGroup, Title } from 'styles/components'
import { WorkRegisterUiId } from './store/registerVo'
import { useMemberPopup } from 'components/popup/member/store/memberPopupHook'
import {
  useReferrerList,
  useReferrerListAction,
  useReferrerListReset,
  useToList,
  useWorkRegister,
} from './store/registerHook'
import styled from 'styled-components'

function ButtonGroup() {
  const goToList = useToList()
  const { register } = useWorkRegister()
  return (
    <RowButtonGroup flexContent="center">
      <Button thin text="취소" btnType="border" ellipsis onClick={goToList} />
      <Button thin color="primary" text="저장" ellipsis onClick={register} />
    </RowButtonGroup>
  )
}

function AddReferrerButton() {
  const memberPopup = useMemberPopup()
  const change = useReferrerListAction()
  const list = useReferrerList()
  return (
    <Button
      iconName="Plus"
      iconPosition="before"
      text="추가"
      btnSize="xsm"
      onClick={() => {
        memberPopup({ list: list }, undefined, v => change(v ? v.list! : []))
      }}
    />
  )
}

const ReferrerListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px;
    padding: 4px 10px;
    border: 1px solid #d8d8d8;
    width: 200px;
    height: 36px;
    font-size: 12px;
    border-radius: 4px;

    button {
      padding: 0 10px;
      &::before {
        background-size: 12px;
      }
    }
  }
`

function ReferrerList() {
  const list = useReferrerList()
  const chage = useReferrerListAction()
  return (
    <>
      {list ? (
        <ReferrerListStyle>
          {list?.map(i => (
            <li key={i.code}>
              <span>
                {i.team}팀 | {i.name}
              </span>

              <Button
                iconName="Closed"
                iconPosition="center"
                btnType="ghost"
                btnSize="xsm"
                onClick={() => chage(list.filter(item => item.code !== i.code))}
              />
            </li>
          ))}
        </ReferrerListStyle>
      ) : (
        <></>
      )}
    </>
  )
}

export default function WorkRegister() {
  useReferrerListReset()
  const data = [
    {
      title: '제목',
      element: (
        <ElementGroup.Row>
          <UiInputText id={WorkRegisterUiId.TITLE} placeholder="업무 제목" />
          <span>100글자이내</span>
        </ElementGroup.Row>
      ),
    },
    {
      title: '기간',
      element: <UiDateOptionGroup id={WorkRegisterUiId.DUE_DATE} onlyDate />,
    },
    {
      title: '우선순위',
      element: (
        <ElementGroup.Row>
          <UiSelectBox
            id={WorkRegisterUiId.PRIORITY}
            data={[
              { id: '0', text: '높음' },
              { id: '1', text: '보통' },
              { id: '2', text: '낮음' },
            ]}
            init={0}
          />
        </ElementGroup.Row>
      ),
    },
    {
      title: '업무상태',
      element: (
        <ElementGroup.Row>
          <UiSelectBox
            id={WorkRegisterUiId.WORK_STATE}
            data={[
              { id: '0', text: '진행예정' },
              { id: '1', text: '진행중' },
              { id: '2', text: '진행완료' },
            ]}
            init={0}
          />
        </ElementGroup.Row>
      ),
    },
    {
      title: '참조자',
      element: (
        <ElementGroup.Col flexWrap flexAlign="start">
          <AddReferrerButton />
          <ReferrerList />
        </ElementGroup.Col>
      ),
    },
    {
      title: '내용',
      element: (
        <ElementGroup.Row>
          <UiInputTextArea id={WorkRegisterUiId.CONTENTS} />
        </ElementGroup.Row>
      ),
    },
  ]

  return (
    <>
      <Title size="md" weight="medium">
        업무등록
      </Title>

      <OptionGrid data={data} />

      <ButtonGroup />
    </>
  )
}
