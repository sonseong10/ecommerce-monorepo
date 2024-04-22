import React, { useEffect } from 'react'
import styles from '../../styles/modules/product-list.module.css'
import buttonStyle from '../../styles/modules/buttons.module.css'
import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Grid from 'commons/ui/grid/Grid'
import Pagelable from 'components/ui/Pagelable'
import { ElementGroup, TableContainer } from 'styles/components'
import { GridDateCell, GridImageCell } from 'commons/ui/grid/AbsGridCell'
import { GridButtonCell, GridLocalStringCell } from 'components/ui/grid/GridCell'
import Button from 'components/ui/Button'
import type { IGrideCell } from 'commons/ui/grid/GridVo'
import { useProductListData } from './store/listHook'

interface IProductListProps {
  onMenuChange: (v: 'member' | 'work' | 'home' | 'product') => void
  dark: boolean
}

function GridroductDeleteCell(props: IGrideCell<[string]>) {
  return (
    <Button
      text="삭제"
      color="negative"
      btnType="ghost"
      btnSize="xsm"
      onClick={() => {
        console.log(props.data[0])
      }}
    />
  )
}

function ProductList({ onMenuChange }: IProductListProps) {
  useEffect(() => {
    onMenuChange('product')
  }, [onMenuChange])

  const { list } = useProductListData()

  return (
    <>
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
        <div>
          <Grid
            id="productList"
            container={TableContainer}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={list as any[]}
            setting={[
              {
                header: '상품코드',
                id: ['code'],
              },
              {
                header: '상품명',
                id: ['productName'],
              },
              {
                header: '메인이미지',
                id: ['mainImage'],
                element: GridImageCell,
              },
              {
                header: '공급가',
                id: ['supplyPrice'],
                element: GridLocalStringCell,
              },
              {
                header: '생성일',
                id: ['createdAt'],
                element: GridDateCell,
              },
              {
                header: '수정일',
                id: ['updateAt'],
                element: GridDateCell,
              },
              {
                header: '수정/상세',
                id: ['code'],
                element: GridButtonCell,
                button: {
                  text: '이동',
                  thin: true,
                  color: 'primary',
                  eventType: 'link',
                  btnType: 'ghost',
                  btnSize: 'xsm',
                  link: {
                    url: `/admin/product/info`,
                    paramidx: 0,
                  },
                },
              },
              {
                header: '삭제',
                id: ['code'],
                element: GridroductDeleteCell,
              },
            ]}
          />
          <ElementGroup.Row flexContent="center">
            <Pagelable current={0} total={11} />
          </ElementGroup.Row>
        </div>
      </div>
    </>
  )
}

export default ProductList
