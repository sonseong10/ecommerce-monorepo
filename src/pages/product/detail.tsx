import React from 'react'
import styles from './product-detail.module.css'
import { BiCamera } from 'react-icons/bi'
import UiInputText from 'commons/components/ui/UiInputText'
import Button from 'components/ui/Button'
import { ElementGroup } from 'styles/components'
import { UiInputFile } from 'components/ui/InputFile'
import { useProductSave } from './store/detailHook'

function BaseProductInfo() {
  return (
    <>
      <strong>기본정보</strong>
      <dl>
        <div>
          <dt>공급사</dt>
          <dd>
            <UiInputText id="supplier" />
          </dd>
        </div>
        <div>
          <dt>상품명(100글자이내)</dt>
          <dd>
            <UiInputText id="productName" />
          </dd>
        </div>
      </dl>
      <dl>
        <div>
          <dt>브랜드</dt>
          <dd>
            <UiInputText id="brandName" />
          </dd>
        </div>
        <div>
          <dt>제조사</dt>
          <dd>
            <UiInputText id="manufacturName" />
          </dd>
        </div>
      </dl>
      <dl className={styles.imageSetting}>
        <div>
          <dt>대표이미지</dt>
          <dd>
            <label htmlFor="mainImag">
              <BiCamera />
            </label>
            <UiInputFile id="mainImag" />
          </dd>
        </div>
        <div>
          <dt>추가이미지</dt>
          <dd>
            <label htmlFor="subImag">
              <BiCamera />
            </label>
            <UiInputFile id="subImag" />
          </dd>
        </div>
      </dl>
    </>
  )
}

function DetailProductInfo() {
  return (
    <>
      <strong>상세정보</strong>
      <div>
        <span>HTML작성</span>
      </div>
      <textarea name="" id=""></textarea>
    </>
  )
}

function PriceProductInfo() {
  return (
    <>
      <strong>가격정보</strong>
      <dl>
        <div>
          <dt>공급가</dt>
          <dd>
            <UiInputText id="supplyPrice" inputSize="180" isPrice />
          </dd>
        </div>
        <div>
          <dt>관세(%)</dt>
          <dd>
            <UiInputText id="tariff" disabled init="10" inputSize="80px" />
          </dd>
        </div>
        <div>
          <dt>소비자가</dt>
          <dd>
            <UiInputText id="retailPrice" inputSize="180" isPrice />
          </dd>
        </div>
        <div>
          <dt>최대구매수량</dt>
          <dd>
            <UiInputText id="maxOrder" inputSize="80" />
          </dd>
        </div>
      </dl>
    </>
  )
}

function ProductOptionInfo() {
  return (
    <>
      <strong>상품옵션</strong>
      <dl>
        <div>
          <dt>옵션설정</dt>
          <dd></dd>
        </div>
      </dl>
    </>
  )
}

function TagProductInfo() {
  return (
    <>
      <strong>태그&연관검색어</strong>
      <div>
        <UiInputText id="tag" />
      </div>
    </>
  )
}

function PolicyProductInfo() {
  return (
    <>
      <strong>정보고시</strong>
    </>
  )
}

function PageButtonGroup() {
  const { save } = useProductSave()

  return (
    <div>
      <Button text="취소" btnType="ghost" />
      <Button text="등록" color="primary" onClick={save} />
    </div>
  )
}

function ProductDetail() {
  return (
    <>
      <ElementGroup.Row className={styles.headerWrapper}>
        <h3>상품등록</h3>

        <PageButtonGroup />
      </ElementGroup.Row>

      <div className={styles.form}>
        <BaseProductInfo />

        <DetailProductInfo />

        <PriceProductInfo />

        <ProductOptionInfo />

        <PolicyProductInfo />

        {/* <strong>베송정책</strong>
        <strong>판매 및 전시상태</strong> */}
        <TagProductInfo />
      </div>
    </>
  )
}

export default ProductDetail
