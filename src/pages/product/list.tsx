import React, { useEffect } from 'react'
import styles from '../../styles/modules/product-list.module.css'
import buttonStyle from '../../styles/modules/buttons.module.css'
import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

interface IProductListProps {
  onMenuChange: (v: 'member' | 'work' | 'home' | 'product') => void
  dark: boolean
}

function ProductList({ onMenuChange }: IProductListProps) {
  useEffect(() => {
    onMenuChange('product')
  }, [onMenuChange])

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className={styles.product}>
        <div className={styles.header}>
          <h3>상품목록</h3>
          <Link to="/admin/product/info" className={`${buttonStyle.baseBtn} ${buttonStyle.primaryBtn} `}>
            <BiCart />
            상품등록
          </Link>
        </div>
        <div>
          <div></div>
        </div>
        <div>pagenation</div>
      </div>
    </div>
  )
}

export default ProductList
