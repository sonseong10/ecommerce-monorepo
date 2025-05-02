import type { IProductVo } from '../pages/product/store/detailVo'
import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, getDatabase, push, query, limitToLast } from 'firebase/database'

class ProductRepository {
  syncProducts(onUpdate: (result: IProductVo[]) => void) {
    const q = query(ref(firebaseDatabase, `products`), limitToLast(10))
    onValue(q, snapshot => {
      const value: { [key: string]: IProductVo } = snapshot.val()
      const code = Object.keys(value)

      value &&
        onUpdate(
          Object.values(value)
            .map((item, index) => ({ ...item, code: code[index] }))
            .reverse(),
        )
    })
    return () => off(q)
  }

  syncProduct(code: string, callBack: (result: IProductVo) => void) {
    const q = ref(firebaseDatabase, `products/${code}`)
    onValue(q, snapshot => {
      const result: IProductVo = snapshot.val()
      result && callBack({ ...result, code: code })
    })
    return () => off(q)
  }

  saveProduct(product: IProductVo) {
    const db = getDatabase()
    const postListRef = ref(db, 'products')
    const newProductRef = push(postListRef)
    set(newProductRef, product)
  }

  updateProduct(productCode: string, product: IProductVo) {
    const db = getDatabase()
    const postListRef = ref(db, `products/${productCode}`)
    set(postListRef, product)
  }

  removeProduct(productCode: string) {
    remove(ref(firebaseDatabase, `products/${productCode}`))
  }
}

export default ProductRepository
