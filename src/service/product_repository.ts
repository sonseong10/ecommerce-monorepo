import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, getDatabase, push, query, limitToLast } from 'firebase/database'

interface IProductVo {
  //
}

class ProductRepository {
  syncProducts(onUpdate: (value: unknown[]) => void) {
    const q = query(ref(firebaseDatabase, `products`), limitToLast(10))
    onValue(q, snapshot => {
      const value = snapshot.val()
      value && onUpdate(Object.values(value).reverse())
    })
    return () => off(q)
  }

  saveProduct(product: IProductVo) {
    const db = getDatabase()
    const postListRef = ref(db, 'products')
    const newProductRef = push(postListRef)
    set(newProductRef, product)
  }

  removeWork(productCode: string) {
    remove(ref(firebaseDatabase, `works/${productCode}`))
  }
}

export default ProductRepository
