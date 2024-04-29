import Accordion from 'components/ui/Accordion'
import Button from 'components/ui/Button'
import { UiInputFile } from 'components/ui/InputFile'
import { UiInputText } from 'components/ui/InputText'
import OptionGrid from 'components/ui/OptionGrid'
import React from 'react'
import { ElementGroup } from 'styles/components'
function DisplayPage() {
  return (
    <>
      <ElementGroup.Row>
        <div>
          <Accordion
            data={[
              {
                title: '메인배너',
                info: { desc: '고정' },
                element: (
                  <OptionGrid
                    data={[
                      {
                        title: '배너설정',
                        element: (
                          <>
                            <div></div>
                            <ElementGroup.Row>
                              <UiInputFile id="dsd" />
                              <UiInputText id="dsdd" />
                              <Button iconName="Plus" iconPosition="center" btnType="border" thin btnSize="sm" />
                              <Button
                                iconName="Delete"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="UpArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="DownArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                            </ElementGroup.Row>
                            <ElementGroup.Row>
                              <UiInputFile id="dsd" />
                              <UiInputText id="dsdd" />
                              <Button iconName="Plus" iconPosition="center" btnType="border" thin btnSize="sm" />
                              <Button
                                iconName="Delete"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="UpArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="DownArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                            </ElementGroup.Row>
                            <ElementGroup.Row>
                              <UiInputFile id="dsd" />
                              <UiInputText id="dsdd" />
                              <Button iconName="Plus" iconPosition="center" btnType="border" thin btnSize="sm" />
                              <Button
                                iconName="Delete"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="UpArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                              <Button
                                iconName="DownArrow"
                                iconPosition="center"
                                btnType="border"
                                thin
                                btnSize="sm"
                                disabled
                              />
                            </ElementGroup.Row>
                          </>
                        ),
                      },
                    ]}
                  />
                ),
              },
              { title: '카테고리진열' },
              { title: '상품진열' },
              { title: '카테고리진열' },
              { title: '상품진열' },
            ]}
          />
        </div>
        <div></div>
      </ElementGroup.Row>
    </>
  )
}

export default DisplayPage
