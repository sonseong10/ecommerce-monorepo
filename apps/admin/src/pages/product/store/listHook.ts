import { useEffect, useState } from 'react'
import ProductRepository from '../../../service/product_repository'
import type { IProductVo } from './detailVo'

const productRepository = new ProductRepository()
export const useProductListData = () => {
  const [list, setList] = useState<IProductVo[] | undefined>(undefined)
  useEffect(() => {
    productRepository.syncProducts((value?: IProductVo[]) => {
      setList(value)
    })
  }, [])

  return { list }
}
