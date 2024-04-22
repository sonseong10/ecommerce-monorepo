import type { ICardVo } from 'types/grobal-type'
import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, query, orderByChild } from 'firebase/database'

class CardRepository {
  syncCards(onUpdate: (value: { [key: string]: ICardVo }) => void) {
    const q = query(ref(firebaseDatabase, `cards`), orderByChild('team'))
    onValue(q, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(q)
  }

  syncCard(userCode: string, onUpdate: (value?: ICardVo) => void) {
    const query = ref(firebaseDatabase, `cards/${userCode}`)
    onValue(query, snapshot => {
      const value = snapshot.val()
      value ? onUpdate(value) : onUpdate(undefined)
    })
    return () => off(query)
  }

  saveCard(userId: string, card: ICardVo) {
    set(ref(firebaseDatabase, `cards/${userId}`), card)
  }

  removeCard(userId: string) {
    remove(ref(firebaseDatabase, `cards/${userId}`))
  }
}

export default CardRepository
