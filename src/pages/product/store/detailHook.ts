import { useSelectorEq } from 'commons/store/common'
import ProductRepository from 'service/product_repository'
import type { IState } from 'store'

const productRepository = new ProductRepository()

export const useProductSave = () => {
  const { productName, supplier, mainImage, subImage } = useSelectorEq((state: IState) => ({
    productName: state.ui.inputText?.productName,
    supplier: state.ui.inputText?.supplier,
    mainImage: state.ui.inputFile?.mainImag,
    subImage: state.ui.inputFile?.subImag,
  }))

  const code = Date.now()

  const save = () => {
    productRepository.saveProduct(code.toString(), {
      productName,
      supplier,
      mainImage: mainImage?.imageData,
      subImage: subImage?.imageData,
    })
  }

  return { save }
}
