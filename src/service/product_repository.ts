import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove } from 'firebase/database'

interface IProductVo {
  //
}

class ProductRepository {
  syncProducts(productCode: string, onUpdate: (value: { [key: string]: IProductVo }) => void) {
    const query = ref(firebaseDatabase, `product/${productCode}`)
    onValue(query, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(query)
  }

  saveProduct(productCode: string, product: IProductVo) {
    set(ref(firebaseDatabase, `product/${productCode}`), product)
  }

  removeWork(productCode: string) {
    remove(ref(firebaseDatabase, `works/${productCode}`))
  }
}

export default ProductRepository
