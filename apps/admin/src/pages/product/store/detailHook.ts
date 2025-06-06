import { useSelectorEq } from '@ecommerce/commons'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductRepository from '../../../service/product_repository'
import { useUiAction } from '@ecommerce/commons'
import { UiType } from '@ecommerce/commons'
import type { IState } from '../../../store/modules'
import { useDispatch } from 'react-redux'
import { rdxSetProduct } from './detailR'

const productRepository = new ProductRepository()

export const useImageData = () => {
  const { mainImage, subImage } = useSelectorEq((state: IState) => ({
    mainImage: state?.ui?.inputFile ? state.ui?.inputFile.mainImage : undefined,
    subImage: state?.ui?.inputFile ? state.ui.inputFile.subImage : undefined,
  }))

  return { mainImage, subImage }
}

export const useProductSave = () => {
  const {
    code,
    createAt,
    productName,
    supplier,
    manufacturName,
    supplyPrice,
    retailPrice,
    maxOrder,
    productDtail,
    mainImage,
    subImage,
    brandName,
  } = useSelectorEq((state: IState) => ({
    code: state.productDetail?.product?.code ? state.productDetail?.product?.code : '',
    createAt: state.productDetail?.product?.createdAt ? state.productDetail?.product?.createdAt : '',
    productName: state?.ui?.inputText?.productName ? state.ui.inputText.productName : '',
    supplier: state?.ui?.inputText?.supplier ? state.ui.inputText.supplier : '',
    manufacturName: state?.ui?.inputText?.manufacturName ? state.ui.inputText.manufacturName : '',
    supplyPrice: state?.ui?.inputText?.supplyPrice ? state.ui.inputText.supplyPrice : '',
    retailPrice: state?.ui?.inputText?.retailPrice ? state.ui.inputText.retailPrice : '',
    maxOrder: state?.ui?.inputText?.maxOrder ? state.ui.inputText.maxOrder : '',
    productDtail: state.ui?.inputText?.productDtail ? state.ui.inputText.productDtail : '',
    brandName: state.ui?.inputText?.brandName ? state.ui.inputText.brandName : '',
    mainImage: state?.ui?.inputFile ? state.ui.inputFile.mainImage : undefined,
    subImage: state?.ui?.inputFile ? state.ui.inputFile.subImage : undefined,
  }))
  const createdAt = Date.now()

  const save = () => {
    productRepository.saveProduct({
      productName,
      supplier,
      manufacturName,
      supplyPrice,
      brandName,
      retailPrice,
      maxOrder,
      createdAt,
      updateAt: '',
      code: '',
      productDtail,
      mainImage: mainImage?.imageData,
      subImage: subImage?.imageData,
    })
  }

  const update = (code: string) => {
    productRepository.updateProduct(code, {
      productName,
      supplier,
      manufacturName,
      supplyPrice,
      brandName,
      retailPrice,
      maxOrder,
      code: '',
      productDtail,
      mainImage: mainImage?.imageData,
      subImage: subImage?.imageData,
      createdAt: createAt,
      updateAt: createdAt,
    })
  }

  return { save, update, code }
}

export const useDetailPageBack = () => {
  const navigate = useNavigate()

  const back = () => {
    navigate('/admin/product/list')
  }

  return { back }
}

export const useInitProductDeail = () => {
  const code = location.href.split('/').pop()
  const { add, commit } = useUiAction()
  const dispatch = useDispatch()
  const init = () => {
    productRepository.syncProduct(code!, product => {
      add(UiType.INPUT_TEXT, 'productName', product.productName)
      add(UiType.INPUT_TEXT, 'manufacturName', product.manufacturName)
      add(UiType.INPUT_TEXT, 'supplier', product.supplier)
      add(UiType.INPUT_TEXT, 'brandName', product.brandName)
      add(UiType.INPUT_TEXT, 'productDtail', product.productDtail)
      add(UiType.INPUT_TEXT, 'supplyPrice', product.supplyPrice)
      add(UiType.INPUT_TEXT, 'retailPrice', product.retailPrice)
      add(UiType.INPUT_TEXT, 'maxOrder', product.maxOrder)
      add(UiType.INPUT_FILE, 'mainImage', { imageData: product.mainImage, filename: '상품이미지' })
      add(UiType.INPUT_FILE, 'subImage', { imageData: product.subImage, filename: '상품이미지' })
      commit()
      dispatch(rdxSetProduct(product))
    })
  }

  useEffect(() => {
    if (code) {
      init()
    }

    return () => {
      dispatch(rdxSetProduct())
    }
  }, [])
}

export const useDeleteProduct = () => {
  const onDelete = (code: string) => {
    productRepository.removeProduct(code)
  }

  return { onDelete }
}
