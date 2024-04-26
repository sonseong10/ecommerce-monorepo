import type { IRegisterWork } from 'pages/work/register/store/registerVo'
import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove, getDatabase, push } from 'firebase/database'

class WorkRepository {
  syncWorks(
    userId: string,
    onUpdate: (value: {
      [key: string]: {
        contents: string
        time: number
        title: string
      }
    }) => void,
  ) {
    const query = ref(firebaseDatabase, `works/${userId}`)
    onValue(query, snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(query)
  }

  saveWork(work: IRegisterWork) {
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
