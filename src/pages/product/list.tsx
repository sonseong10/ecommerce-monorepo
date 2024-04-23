import React, { useEffect } from 'react'
import Grid from 'commons/ui/grid/Grid'
import Pagelable from 'components/ui/Pagelable'
import { ElementGroup, TableContainer, Title } from 'styles/components'
import { GridDateCell, GridImageCell } from 'commons/ui/grid/AbsGridCell'
import { GridButtonCell, GridLocalStringCell } from 'components/ui/grid/GridCell'
import Button from 'components/ui/Button'
import type { IGridSetting, IGrideCell } from 'commons/ui/grid/GridVo'
import { useProductListData } from './store/listHook'
import OptionGrid from 'components/ui/OptionGrid'
import type { IProductVo } from './store/detailVo'
import { useDeleteProduct } from './store/detailHook'

interface IProductListProps {
  onMenuChange: (v: 'member' | 'work' | 'home' | 'product') => void
  dark: boolean
}

function GridroductDeleteCell(props: IGrideCell<[string]>) {
  const { onDelete } = useDeleteProduct()
  return (
    <Button
      text="삭제"
      color="negative"
      btnType="ghost"
      btnSize="xsm"
      onClick={() => {
        onDelete(props.data[0])
      }}
    />
  )
}

function List() {
  const { list } = useProductListData()

  const settting: IGridSetting<IProductVo>[] = [
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
  ]

  return <Grid id="productList" container={TableContainer} data={list ? list : []} setting={settting} />
}

function ProductList({ onMenuChange }: IProductListProps) {
  useEffect(() => {
    onMenuChange('product')
  }, [onMenuChange])

  return (
    <>
      <ElementGroup.Row flexContent="between">
        <Title weight="medium" size="lg">
          상품목록
        </Title>
      </ElementGroup.Row>

      <OptionGrid
        data={[
          { title: '상품명', element: <div /> },
          { title: '공급가', element: <div /> },
          { title: '생성일', element: <div /> },
        ]}
      />

      <ElementGroup.Row flexContent="end">
        <Button color="primary" btnSize="sm" text="신규상품 등록" iconName="NextArrow" iconPosition="after" />
      </ElementGroup.Row>

      <List />

      <ElementGroup.Row flexContent="center">
        <Pagelable current={0} total={11} />
      </ElementGroup.Row>
    </>
  )
}

export default ProductList
