import { useEffect, useState } from 'react'
import ProductRepository from 'service/product_repository'

const productRepository = new ProductRepository()
export const useProductListData = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any>(undefined)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    productRepository.syncProducts((value: any) => {
      setList(value)
    })
  }, [])

  return { list }
}
