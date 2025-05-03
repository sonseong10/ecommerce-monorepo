// import styles from './product-detail.module.css'
import { BiCamera } from 'react-icons/bi'
import { UiInputText } from '@ecommerce/commons'
import Button from '../../components/ui/Button'
import { ElementGroup, Text, Title } from '../../styles/components'
import { UiInputFile } from '../../components/ui/InputFile'
import { useDetailPageBack, useImageData, useInitProductDeail, useProductSave } from './store/detailHook'
import { UiInputTextArea } from '../../components/ui/InputTextArea'
import { useIConPopup } from '../../components/popup/popupHook'
import { useNavigate } from 'react-router-dom'
import OptionGrid from '../../components/ui/OptionGrid'
import TabMenu from '../../components/ui/TabMenu'
import { UiCheckBox } from '../../components/ui/CheckBox'
import styled from 'styled-components'
import { Grid } from '@ecommerce/commons'
import type { IGrideCell } from '@ecommerce/commons'

interface IProductImageComponent {
  id: string
  imageData?: string
}

const ProductImageStyle = styled.div`
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background-color: #f4f6f8;
    border-radius: 4px;
    color: #ddd;
    font-size: 42px;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  input,
  button {
    display: none;
  }
`

function ProductImage({ id, imageData }: IProductImageComponent) {
  return (
    <ProductImageStyle>
      {imageData ? (
        <>
          <label htmlFor={id}>
            <img src={imageData} alt="" />
          </label>
        </>
      ) : (
        <label htmlFor={id}>
          <BiCamera />
        </label>
      )}
      <UiInputFile id={id} />
    </ProductImageStyle>
  )
}

const ProductOptionValue = ({ data }: IGrideCell<[number]>) => {
  return <>{<UiInputText id={`option${data[0]}`} />}</>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductOptionSetting = (_props: IGrideCell<[number]>) => {
  return (
    <ElementGroup.Row $flexContent="center">
      <Button $iconName="Plus" $iconPosition="center" />
      <Button $iconName="Delete" $iconPosition="center" />
    </ElementGroup.Row>
  )
}

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

                <ElementGroup.Row>
                  <ElementGroup.Col flexAlign="start">
                    <Text>대표이미지</Text>
                    <ProductImage id="mainImage" imageData={mainImage?.imageData} />
                  </ElementGroup.Col>
                  <ElementGroup.Col flexAlign="start">
                    <Text>추가이미지</Text>
                    <ProductImage id="subImage" imageData={subImage?.imageData} />
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
              <>
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

                <OptionGrid
                  data={[
                    {
                      title: '품질보증기준',
                      element: (
                        <ElementGroup.Row>
                          <UiInputText id="temp1" placeholder="내용 입력" />
                          <UiCheckBox id="temp2" name="temp2" text="상세페이지 참조" />
                        </ElementGroup.Row>
                      ),
                    },
                    {
                      title: '취급시 주의사항',
                      element: (
                        <ElementGroup.Row>
                          <UiInputText id="temp3" placeholder="내용 입력" />
                          <UiCheckBox id="temp4" name="temp4" text="상세페이지 참조" />
                        </ElementGroup.Row>
                      ),
                    },
                    {
                      title: 'A/S 전화번호',
                      element: (
                        <ElementGroup.Row>
                          <UiInputText id="temp5" placeholder="내용 입력" />
                          <UiCheckBox id="temp6" name="temp6" text="상세페이지 참조" />
                        </ElementGroup.Row>
                      ),
                    },
                  ]}
                />
              </>
            ),
          },
          {
            title: '옵션정보',
            element: (
              <div>
                <Grid
                  data={[{ uid: 0 }, { uid: 1 }]}
                  setting={[
                    { header: '옵션명', id: ['uid'], element: ProductOptionValue },
                    { header: '옵션값', id: ['uid'], element: ProductOptionValue },
                    { header: '추가/삭제', id: ['uid'], element: ProductOptionSetting },
                  ]}
                />

                <Button text="옵션생성" />
              </div>
            ),
          },
          {
            title: '추가옵션정보',
            element: (
              <div>
                <Grid
                  data={[{ uid: 0 }, { uid: 1 }]}
                  setting={[
                    { header: '옵션명', id: ['uid'], element: ProductOptionValue },
                    { header: '옵션값', id: ['uid'], element: ProductOptionValue },
                    { header: '추가/삭제', id: ['uid'], element: ProductOptionSetting },
                  ]}
                />

                <Button text="옵션생성" />
              </div>
            ),
          },
          { title: '배송정책' },
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
    <ElementGroup.Row>
      <Button text="취소" $btnType="ghost" onClick={back} />
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
    </ElementGroup.Row>
  )
}

function ProductDetail() {
  useInitProductDeail()

  return (
    <>
      <ElementGroup.Row $flexContent="between">
        <Title size="md" weight="medium">
          상품관리
        </Title>

        <PageButtonGroup />
      </ElementGroup.Row>

      <div style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
        <ProductInfo />
      </div>
    </>
  )
}

export default ProductDetail
