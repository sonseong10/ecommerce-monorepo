import React from 'react'
import styles from './product-detail.module.css'
import buttonStyle from '../../styles/modules/buttons.module.css'
import { BiCamera } from 'react-icons/bi'
import UiInputText from 'commons/components/ui/UiInputText'

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
      <dl className="image-setting">
        <div>
          <dt>대표이미지</dt>
          <dd>
            <label htmlFor="image">
              <BiCamera />
            </label>
            <input type="file" id="image" />
          </dd>
        </div>
        <div>
          <dt>추가이미지</dt>
          <dd>
            <label htmlFor="addImage">
              <BiCamera />
            </label>
            <input type="file" id="addImage" />
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
            <UiInputText id="supplyPrice" />
          </dd>
        </div>
        <div>
          <dt>소비자가</dt>
          <dd>
            <UiInputText id="retailPrice" />
          </dd>
        </div>
        <div>
          <dt>관세</dt>
          <dd>
            <UiInputText id="tariff" disabled value="10" />
          </dd>
        </div>
        <div>
          <dt>최대구매수량</dt>
          <dd>
            <UiInputText id="maxOrder" />
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

function ProductDetail() {
  return (
    <>
      <div className={styles.headerWrapper}>
        <h3>상품등록</h3>

        <div>
          <button className={`${buttonStyle.baseBtn} `}>취소</button>

          <button className={`${buttonStyle.baseBtn} ${buttonStyle.primaryBtn}`}>등록</button>
        </div>
      </div>

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
