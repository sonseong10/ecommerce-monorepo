import Accordion from '../../components/ui/Accordion'
import Button from '../../components/ui/Button'
import { UiInputFile } from '../../components/ui/InputFile'
import { UiInputText } from '../../components/ui/InputText'
import OptionGrid from '../../components/ui/OptionGrid'
import { UiRadioGroup } from '../../components/ui/RadioGroup'
import styled from 'styled-components'
import { ElementGroup, Title } from '../../styles/components'

const DisplayWrapper = styled(ElementGroup.Row)`
  position: relative;
`

const LeftGroup = styled.div`
  max-height: calc(100vh - 150px);
  max-width: calc(100% - 250px);
  overflow-y: auto;
`
const RightGroup = styled.div`
  position: absolute;
  top: 0;
  height: calc(100vh - 150px);
  width: 240px;
  right: 0;
`

const OrderList = styled.ol`
  li {
    border: 1px solid var(--btn-disabled);
    border-radius: 4px;
    padding: 6px;
    min-height: 60px;
    font-size: 12px;
    margin-bottom: 4px;

    > div {
      margin: 4px;
    }
  }
`

function DisplayPage() {
  return (
    <>
      <ElementGroup.Row $flexContent="between">
        <Title size="md" $fontWeight="medium">
          진열관리
        </Title>

        <Button text="등록" thin color="primary" $btnSize="xsm" $iconName="Save" $iconPosition="before" />
      </ElementGroup.Row>
      <DisplayWrapper>
        <LeftGroup>
          <Accordion
            closeAll={true}
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
                            <div>preview carousel</div>
                            <ElementGroup.Row>
                              <UiInputFile id="dsd" />
                              <UiInputText id="dsdd" placeholder="이동할 페이지주소 입력" />
                              <Button $iconName="Plus" $iconPosition="center" $btnType="border" thin $btnSize="sm" />
                              <Button
                                $iconName="Delete"
                                $iconPosition="center"
                                $btnType="border"
                                thin={true}
                                $btnSize="sm"
                                disabled
                              />
                              <Button
                                $iconName="UpArrow"
                                $iconPosition="center"
                                $btnType="border"
                                thin={true}
                                $btnSize="sm"
                                disabled
                              />
                              <Button
                                $iconName="DownArrow"
                                $iconPosition="center"
                                $btnType="border"
                                thin={true}
                                $btnSize="sm"
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
              {
                title: '카테고리진열',
                element: (
                  <>
                    <UiRadioGroup
                      name="category_type"
                      data={[
                        { id: 'ex', text: '기획전' },
                        { id: 'ex1', text: '상품' },
                      ]}
                      init={0}
                      type="button"
                    />

                    <OptionGrid
                      data={[
                        {
                          title: '타이틀',
                          element: (
                            <ElementGroup.Row>
                              <UiInputText id="title" />
                            </ElementGroup.Row>
                          ),
                        },
                        {
                          title: '더보기버튼 설정',
                          element: (
                            <ElementGroup.Row>
                              <UiRadioGroup
                                name="moreButtonState"
                                type="button"
                                data={[
                                  { id: 'ex', text: '활성화' },
                                  { id: 'ex1', text: '비활성화' },
                                ]}
                                init={0}
                              />
                            </ElementGroup.Row>
                          ),
                        },
                        {
                          title: '기획전설정',
                          element: (
                            <ElementGroup.Row>
                              <Button text="기획전 선택" />
                            </ElementGroup.Row>
                          ),
                        },
                      ]}
                    />
                  </>
                ),
              },
              {
                title: '상품진열',
                element: (
                  <>
                    <OptionGrid
                      data={[
                        {
                          title: '타이틀',
                          element: (
                            <ElementGroup.Row>
                              <UiInputText id="title1" />
                            </ElementGroup.Row>
                          ),
                        },
                        {
                          title: '더보기버튼 설정',
                          element: (
                            <ElementGroup.Row>
                              <UiRadioGroup
                                name="moreButtonState1"
                                type="button"
                                data={[
                                  { id: 'ex', text: '활성화' },
                                  { id: 'ex1', text: '비활성화' },
                                ]}
                                init={0}
                              />
                            </ElementGroup.Row>
                          ),
                        },
                        {
                          title: '상품진열 설정',
                          element: (
                            <ElementGroup.Row>
                              <Button text="상품 선택" />
                            </ElementGroup.Row>
                          ),
                        },
                      ]}
                    />
                  </>
                ),
              },
              {
                title: '카테고리진열',
                element: (
                  <>
                    <UiRadioGroup
                      name="category_type2"
                      data={[
                        { id: 'ex', text: '기획전' },
                        { id: 'ex1', text: '상품' },
                      ]}
                      init={1}
                      type="button"
                    />
                  </>
                ),
              },
              {
                title: '상품진열',
                element: (
                  <OptionGrid
                    data={[
                      {
                        title: '타이틀',
                        element: (
                          <ElementGroup.Row>
                            <UiInputText id="title1" />
                          </ElementGroup.Row>
                        ),
                      },
                      {
                        title: '더보기버튼 설정',
                        element: (
                          <ElementGroup.Row>
                            <UiRadioGroup
                              name="moreButtonState1"
                              type="button"
                              data={[
                                { id: 'ex', text: '활성화' },
                                { id: 'ex1', text: '비활성화' },
                              ]}
                              init={0}
                            />
                          </ElementGroup.Row>
                        ),
                      },
                      {
                        title: '상품진열 설정',
                        element: (
                          <ElementGroup.Row>
                            <Button text="상품 선택" />
                          </ElementGroup.Row>
                        ),
                      },
                    ]}
                  />
                ),
              },
            ]}
          />
        </LeftGroup>
        <RightGroup>
          <OrderList>
            <li>메인배너</li>
            <li>
              카테고리진열
              <ElementGroup.Row $flexContent="end">
                <Button
                  $iconName="UpArrow"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="sm"
                  disabled
                />
                <Button $iconName="DownArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="sm" />
                <Button
                  $iconName="Delete"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="xsm"
                  disabled
                />
              </ElementGroup.Row>
            </li>
            <li>
              상품진열
              <ElementGroup.Row $flexContent="end">
                <Button $iconName="UpArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="sm" />
                <Button $iconName="DownArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="sm" />
                <Button
                  $iconName="Delete"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="xsm"
                  disabled
                />
              </ElementGroup.Row>
            </li>
            <li>
              카테고리진열
              <ElementGroup.Row $flexContent="end">
                <Button $iconName="UpArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="xsm" />
                <Button $iconName="DownArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="xsm" />
                <Button
                  $iconName="Delete"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="xsm"
                  disabled
                />
              </ElementGroup.Row>
            </li>
            <li>
              상품진열
              <ElementGroup.Row $flexContent="end">
                <Button $iconName="UpArrow" $iconPosition="center" $btnType="border" thin={true} $btnSize="xsm" />
                <Button
                  $iconName="DownArrow"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="xsm"
                  disabled
                />
                <Button
                  $iconName="Delete"
                  $iconPosition="center"
                  $btnType="border"
                  thin={true}
                  $btnSize="xsm"
                  disabled
                />
              </ElementGroup.Row>
            </li>
          </OrderList>
        </RightGroup>
      </DisplayWrapper>
    </>
  )
}

export default DisplayPage
