import Button from 'components/ui/Button'
import { UiDateOptionGroup } from 'components/ui/DateOptionGroup'
import { UiInputText } from 'components/ui/InputText'
import { UiInputTextArea } from 'components/ui/InputTextArea'
import OptionGrid from 'components/ui/OptionGrid'
import React from 'react'
import { ElementGroup, RowButtonGroup, Title } from 'styles/components'

export default function WorkRegister() {
  return (
    <>
      <Title size="md" weight="medium">
        업무등록
      </Title>

      <OptionGrid
        data={[
          {
            title: '제목',
            element: (
              <ElementGroup.Row>
                <UiInputText id="workTitle" placeholder="업무 제목" />
                <span>100글자이내</span>
              </ElementGroup.Row>
            ),
          },
          {
            title: '기간',
            element: <UiDateOptionGroup id="dueDate" onlyDate />,
          },
          {
            title: '우선순위',
            element: (
              <ElementGroup.Row>
                <UiInputText id="d2" />
              </ElementGroup.Row>
            ),
          },
          {
            title: '업무상태',
            element: (
              <ElementGroup.Row>
                <UiInputText id="d2" />
              </ElementGroup.Row>
            ),
          },
          {
            title: '참조자',
            element: (
              <ElementGroup.Row>
                <Button iconName="Plus" iconPosition="before" text="추가" btnSize="xsm" />
              </ElementGroup.Row>
            ),
          },
          {
            title: '내용',
            element: (
              <ElementGroup.Row>
                <UiInputTextArea id="ds3" />
              </ElementGroup.Row>
            ),
          },
        ]}
      />

      <RowButtonGroup flexContent="center">
        <Button thin text="취소" btnType="border" ellipsis />
        <Button thin color="primary" text="저장" ellipsis />
      </RowButtonGroup>
    </>
  )
}
