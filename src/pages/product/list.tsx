import React, { useEffect } from 'react'
import styles from '../../styles/modules/product-list.module.css'
import buttonStyle from '../../styles/modules/buttons.module.css'

interface IProductListProps {
  onMenuChange: (v: 'search' | 'work' | 'home' | 'product') => void
  dark: boolean
}

function ProductList({ onMenuChange }: IProductListProps) {
  useEffect(() => {
    onMenuChange('product')
  }, [onMenuChange])

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className={styles.product}>
        <div className={styles.title}>
          <h3>상품목록</h3>
          <button
            type="button"
            className={`${buttonStyle.baseBtn} ${buttonStyle.ghostBtn} `}
          >
            상품등록
          </button>
        </div>
        <div>productList</div>
        <div>pagenation</div>
      </div>
    </div>
  )
}

export default ProductList
