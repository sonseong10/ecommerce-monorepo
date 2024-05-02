import React from 'react'
import styles from './product-detail.module.css'
import { BiCamera } from 'react-icons/bi'
import UiInputText from 'commons/components/ui/UiInputText'
import Button from 'components/ui/Button'
import { ElementGroup, RowButtonGroup, Text } from 'styles/components'
import { UiInputFile } from 'components/ui/InputFile'
import { useDetailPageBack, useImageData, useInitProductDeail, useProductSave } from './store/detailHook'
import { UiInputTextArea } from 'components/ui/InputTextArea'
import { useIConPopup } from 'components/popup/popupHook'
import { useNavigate } from 'react-router-dom'
import OptionGrid from 'components/ui/OptionGrid'
import TabMenu from 'components/ui/TabMenu'

function ProductInfo() {
  const { mainImage, subImage } = useImageData()
  return (
    <>
      <OptionGrid
        data={[
          {
            title: '기본정보',
            element: (
              <>
                <ElementGroup.Row>
                  <ElementGroup.Col flexAlign="start">
                    <Text>공급사</Text>
                    <UiInputText id="supplier" placeholder="공급사 명" />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>상품명(100글자이내)</Text>
                    <UiInputText id="productName" placeholder="상품표시 명" />
                  </ElementGroup.Col>
                </ElementGroup.Row>

                <ElementGroup.Row className={styles.imageSetting}>
                  <ElementGroup.Col flexAlign="start">
                    <Text>대표이미지</Text>
                    {mainImage?.imageData ? (
                      <>
                        <label htmlFor="mainImage">
                          <img src={mainImage.imageData} />
                        </label>
                      </>
                    ) : (
                      <label htmlFor="mainImage">
                        <BiCamera />
                      </label>
                    )}
                    <UiInputFile id="mainImage" />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>추가이미지</Text>
                    {subImage?.imageData ? (
                      <label htmlFor="subImage">
                        <img src={subImage.imageData} />
                      </label>
                    ) : (
                      <label htmlFor="subImage">
                        <BiCamera />
                      </label>
                    )}
                    <UiInputFile id="subImage" />
                  </ElementGroup.Col>
                </ElementGroup.Row>
              </>
            ),
          },
          {
            title: '가격정보',
            element: (
              <>
                <ElementGroup.Row>
                  <ElementGroup.Col flexAlign="start">
                    <Text>공급가</Text>

                    <UiInputText id="supplyPrice" inputSize="180" isPrice placeholder="숫자만입력" />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>관세(%)</Text>

                    <UiInputText id="tariff" disabled init="10" inputSize="80px" />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>소비자가</Text>

                    <UiInputText id="retailPrice" inputSize="180" isPrice placeholder="숫자만입력" />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>최대구매수량</Text>

                    <UiInputText id="maxOrder" inputSize="80" placeholder="숫자만입력" />
                  </ElementGroup.Col>
                </ElementGroup.Row>
              </>
            ),
          },
          {
            title: '상세정보',
            element: (
              <>
                <TabMenu
                  list={[
                    { id: '0', text: 'HTML입력' },
                    { id: '1', text: '에디터' },
                  ]}
                  kinds="Button"
                  active="0"
                />
                <UiInputTextArea id="productDtail" placeholder="상품상세 정보 입력" />
              </>
            ),
          },
          {
            title: '추가정보',
            element: (
              <ElementGroup.Row>
                <ElementGroup.Col flexAlign="start">
                  <Text>브랜드</Text>
                  <UiInputText id="brandName" placeholder="브랜드 명" />
                </ElementGroup.Col>
                <ElementGroup.Col flexAlign="start">
                  <Text>제조사</Text>
                  <UiInputText id="manufacturName" placeholder="제조사 명" />
                </ElementGroup.Col>
              </ElementGroup.Row>
            ),
          },
        ]}
      />
    </>
  )
}

function PageButtonGroup() {
  const { save, update, code } = useProductSave()
  const { back } = useDetailPageBack()
  const iconPopup = useIConPopup()
  const navigate = useNavigate()

  return (
    <RowButtonGroup>
      <Button text="취소" btnType="ghost" onClick={back} />
      <Button
        text={code ? '제품수정' : '제품등록'}
        color="primary"
        onClick={() => {
          if (code) {
            update(code)
            iconPopup(
              'alert',
              { iconType: 'Check', iconColor: '35C5F0', desc: '작업이 완료되었습니다', title: '제품수정완료' },
              undefined,
              v => {
                if (v) {
                  navigate('/admin/product/list')
                }
              },
            )
          } else {
            save()
            iconPopup(
              'alert',
              { iconType: 'Check', iconColor: '35C5F0', desc: '작업이 완료되었습니다', title: '제품등록완료' },
              undefined,
              v => {
                if (v) {
                  navigate('/admin/product/list')
                }
              },
            )
          }
        }}
      />
    </RowButtonGroup>
  )
}

function ProductDetail() {
  useInitProductDeail()

  return (
    <>
      <ElementGroup.Row className={styles.headerWrapper}>
        <h3>상품관리</h3>

        <PageButtonGroup />
      </ElementGroup.Row>

      <div className={styles.form}>
        <ProductInfo />
      </div>
    </>
  )
}

export default ProductDetail
