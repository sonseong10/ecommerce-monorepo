import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
  return (
    <>
      <div>
        <h3>상품등록</h3>
        <Link to={'/admin/product/list'}>목록</Link>
      </div>

      <div>
        <strong>기본정보</strong>
        <dl>
          <div>
            <dt>공급사</dt>
            <dd>
              <input />
            </dd>
          </div>
          <div>
            <dt>상품명</dt>
            <dd>
              <input />
            </dd>
          </div>
          <div>
            <dt>대표이미지</dt>
            <dd>
              <input type="file" />
            </dd>
          </div>
          <div>
            <dt>추가이미지</dt>
            <dd>
              <input type="file" />
            </dd>
          </div>
        </dl>

        <strong>가격정보</strong>
        <dl>
          <div>
            <dt>공급가</dt>
            <dd>
              <input />
            </dd>
          </div>
          <div>
            <dt>소비자가</dt>
            <dd>
              <input />
            </dd>
          </div>
          <div>
            <dt>관세</dt>
            <dd>
              <input />
            </dd>
          </div>
          <div>
            <dt>구매수량</dt>
            <dd>
              <input />
            </dd>
          </div>

          <div>
            <dt>태크 연관검색어</dt>
            <dd>
              <input />
            </dd>
          </div>
        </dl>

        <strong>상품옵션</strong>
        <dl>
          <div>
            <dt>옵션설정</dt>
            <dd></dd>
          </div>
        </dl>

        <strong>정보고시</strong>
        <dl>
          <div>
            <dt>브랜드</dt>
            <dd></dd>
          </div>
          <div>
            <dt>제조사</dt>
            <dd></dd>
          </div>
        </dl>

        <strong>베송정책</strong>

        <strong>판매 및 전시상태</strong>
      </div>
    </>
  )
}

export default ProductDetail
