import { useSelectorEq } from 'commons/store/common'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductRepository from 'service/product_repository'
import type { IState } from 'store'

const productRepository = new ProductRepository()

export const useImageData = () => {
  const { mainImage, subImage } = useSelectorEq((state: IState) => ({
    mainImage: state?.ui?.inputFile ? state.ui?.inputFile.mainImag : undefined,
    subImage: state?.ui?.inputFile ? state.ui.inputFile.subImag : undefined,
  }))

  return { mainImage, subImage }
}

export const useProductSave = () => {
  const {
    productName,
    supplier,
    mainImage,
    subImage,
    manufacturName,
    supplyPrice,
    retailPrice,
    maxOrder,
    productDtail,
  } = useSelectorEq((state: IState) => ({
    productName: state?.ui?.inputText ? state.ui.inputText.productName : '',
    supplier: state?.ui?.inputText ? state.ui.inputText.supplier : '',
    manufacturName: state?.ui?.inputText ? state.ui.inputText.manufacturName : '',
    supplyPrice: state?.ui?.inputText ? state.ui.inputText.supplyPrice : '',
    retailPrice: state?.ui?.inputText ? state.ui.inputText.retailPrice : '',
    maxOrder: state?.ui?.inputText ? state.ui.inputText.maxOrder : '',
    productDtail: state.ui?.inputText ? state.ui.inputText.productDtail : '',
    mainImage: state?.ui?.inputFile ? state.ui.inputFile.mainImag : undefined,
    subImage: state?.ui?.inputFile ? state.ui.inputFile.subImag : undefined,
  }))

  const code = Date.now()

  const save = () => {
    productRepository.saveProduct(code.toString(), {
      productName,
      supplier,
      manufacturName,
      supplyPrice,
      retailPrice,
      maxOrder,
      productDtail,
      mainImage: mainImage?.imageData,
      subImage: subImage?.imageData,
    })
  }

  return { save }
}

export const useDetailPageBack = () => {
  const navigate = useNavigate()

  const back = () => {
    navigate('/admin/product/list')
  }

  return { back }
}

export const useProductListData = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any>(undefined)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    productRepository.syncProducts('', (value: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const arr: any[] = []
      const keys = Object.keys(value)
      keys.map((i, index) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const temp: any[] = Object.values(value)
        arr.push({ ...temp[index], code: i })
      })
      setList(arr)
    })
  }, [])

  return { list }
}
