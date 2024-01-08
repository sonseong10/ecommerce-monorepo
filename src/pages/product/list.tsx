import React, { useEffect } from 'react'

interface IProductListProps {
  onMenuChange: (v: 'search' | 'work' | 'home' | 'product') => void
  dark: boolean
}

function ProductList({ onMenuChange, dark }: IProductListProps) {
  console.log(dark)

  useEffect(() => {
    onMenuChange('product')
  }, [onMenuChange])
  return (
    <div>
      <div>
        <h3>상품목록</h3>
        <button type="button">상품등록</button>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ProductList
