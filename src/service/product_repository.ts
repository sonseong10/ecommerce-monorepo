import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, getDatabase, push, query, limitToLast } from 'firebase/database'

interface IProductVo {
  //
}

class ProductRepository {
  syncProducts(onUpdate: (result: IProductVo[]) => void) {
    const q = query(ref(firebaseDatabase, `products`), limitToLast(10))
    onValue(q, snapshot => {
      const value: { [key: string]: IProductVo } = snapshot.val()
      value && onUpdate(Object.values(value).reverse())
    })
    return () => off(q)
  }

  syncProduct(code: string, callBack: (result: IProductVo) => void) {
    const q = ref(firebaseDatabase, `products/${code}`)
    onValue(q, snapshot => {
      const result: IProductVo = snapshot.val()
      result && callBack(result)
    })
    return () => off(q)
  }

  saveProduct(product: IProductVo) {
    const db = getDatabase()
    const postListRef = ref(db, 'products')
    const newProductRef = push(postListRef)
    set(newProductRef, product)
  }

  removeProduct(productCode: string) {
    remove(ref(firebaseDatabase, `products/${productCode}`))
  }
}

export default ProductRepository
