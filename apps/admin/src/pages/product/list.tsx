import { Grid } from '@ecommerce/commons'
import Pagelable from '../../components/ui/Pagelable'
import { ElementGroup, TableContainer, Title } from '../../styles/components'
import { GridDateCell, GridImageCell } from '@ecommerce/commons'
import { GridButtonCell, GridLocalStringCell, GridWrapCell } from '../../components/ui/grid/GridCell'
import Button from '../../components/ui/Button'
import type { IGridSetting, IGrideCell } from '@ecommerce/commons'
import { useProductListData } from './store/listHook'
import OptionGrid from '../../components/ui/OptionGrid'
import type { IProductVo } from './store/detailVo'
import { useDeleteProduct } from './store/detailHook'
import { useNavigate } from 'react-router-dom'
import { UiInputText } from '../../components/ui/InputText'
import { UiDateOptionGroup } from '../../components/ui/DateOptionGroup'

// interface IProductListProps {
//   dark: boolean
// }

function GridroductDeleteCell(props: IGrideCell<[string]>) {
  const { onDelete } = useDeleteProduct()
  return (
    <Button
      text="삭제"
      color="negative"
      btntype="ghost"
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
      width: '220px',
    },
    {
      header: '상품명',
      id: ['productName'],
      element: GridWrapCell,
      width: 'auto',
    },
    {
      header: '메인이미지',
      id: ['mainImage'],
      element: GridImageCell,
      width: '110px',
    },
    {
      header: '공급가',
      id: ['supplyPrice'],
      element: GridLocalStringCell,
      width: '100px',
    },
    {
      header: '생성일',
      id: ['createdAt'],
      element: GridDateCell,
      width: '100px',
    },
    {
      header: '수정일',
      id: ['updateAt'],
      element: GridDateCell,
      width: '100px',
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
        btntype: 'ghost',
        btnSize: 'xsm',
        link: {
          url: `/admin/product/info`,
          paramidx: 0,
        },
      },
      width: '80px',
    },
    {
      header: '삭제',
      id: ['code'],
      element: GridroductDeleteCell,
      width: '80px',
    },
  ]

  return (
    <Grid
      id="productList"
      container={TableContainer}
      data={list ? list : []}
      setting={settting}
      headerInfo={{ fixed: 'calc(100vh - 580px)' }}
      layoutOverflow
    />
  )
}

function ProductList() {
  const navigate = useNavigate()
  return (
    <>
      <ElementGroup.Row flexContent="between">
        <Title weight="medium" size="lg">
          상품목록
        </Title>

        <Button
          color="primary"
          btnSize="xsm"
          text="상품 등록"
          iconName="NextArrow"
          iconPosition="after"
          onClick={() => navigate('/admin/product/info')}
        />
      </ElementGroup.Row>

      <OptionGrid
        data={[
          {
            title: '상품명',
            element: (
              <ElementGroup.Row>
                <UiInputText id="keyword" placeholder="상품명 입력" />
              </ElementGroup.Row>
            ),
          },
          {
            title: '공급가',
            element: (
              <ElementGroup.Row>
                <UiInputText id="supplyPrice" placeholder="상품가격 입력" />
              </ElementGroup.Row>
            ),
          },
          {
            title: '생성일',
            element: (
              <ElementGroup.Row>
                <UiDateOptionGroup id="date" onlyDate />
              </ElementGroup.Row>
            ),
          },
        ]}
      />

      <ElementGroup.Row flexContent="center">
        <Button btntype="border" thin text="초가화" />
        <Button text="검색" thin />
      </ElementGroup.Row>

      <List />

      <ElementGroup.Row flexContent="center">
        <Pagelable current={0} total={11} />
      </ElementGroup.Row>
    </>
  )
}

export default ProductList
