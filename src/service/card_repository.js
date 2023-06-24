import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove } from 'firebase/database'

class CardRepository {
  syncCards(onUpdate) {
    const query = ref(firebaseDatabase, `cards`)
    onValue(query, (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off()
  }

  saveCard(userId, card) {
    set(ref(firebaseDatabase, `cards/${userId}`), card)
  }

  removeCard(userId) {
    remove(ref(firebaseDatabase, `cards/${userId}`))
  }
}

export default CardRepository
