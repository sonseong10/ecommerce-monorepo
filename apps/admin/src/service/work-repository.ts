import type { IRegisterWorkVo } from '../pages/work/register/store/registerVo'
import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, getDatabase, push } from 'firebase/database'

class WorkRepository {
  syncWorks(onUpdate: (value: { [key: string]: IRegisterWorkVo }) => void) {
    const q = ref(firebaseDatabase, `works`)
    onValue(q, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(q)
  }

  syncWork(workCode: string, onUpdate: (result: IRegisterWorkVo) => void) {
    const q = ref(firebaseDatabase, `works/${workCode}`)
    onValue(q, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(q)
  }

  saveWork(work: IRegisterWorkVo) {
    const db = getDatabase()
    const workRef = ref(db, 'works')
    const newWorkRef = push(workRef)
    set(newWorkRef, work)
  }

  removeWork(userId: string) {
    remove(ref(firebaseDatabase, `works/${userId}`))
  }

  removeWorkAll(userId: string) {
    remove(ref(firebaseDatabase, `works/${userId}`))
  }
}

export default WorkRepository
