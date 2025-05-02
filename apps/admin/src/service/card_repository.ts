import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, query, orderByChild } from 'firebase/database'
import type { IMemberVo } from '../pages/member/manage/store/manageVo'

class CardRepository {
  syncCards(onUpdate: (value: { [key: string]: IMemberVo }) => void) {
    const q = query(ref(firebaseDatabase, `cards`), orderByChild('team'))
    onValue(q, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(q)
  }

  syncCard(userCode: string, onUpdate: (value?: IMemberVo) => void) {
    const query = ref(firebaseDatabase, `cards/${userCode}`)
    onValue(query, snapshot => {
      const value = snapshot.val()
      value ? onUpdate(value) : onUpdate(undefined)
    })
    return () => off(query)
  }

  saveCard(userId: string, card: IMemberVo) {
    set(ref(firebaseDatabase, `cards/${userId}`), card)
  }

  removeCard(userId: string) {
    remove(ref(firebaseDatabase, `cards/${userId}`))
  }
}

export default CardRepository
