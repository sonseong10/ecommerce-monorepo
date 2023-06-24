import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove } from 'firebase/database'

class WorkRepository {
  syncWorks(userId, onUpdate) {
    const query = ref(firebaseDatabase, `works/${userId}`)
    onValue(query, (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off()
  }

  saveWork(userId, work) {
    set(ref(firebaseDatabase, `works/${userId}/${work.time}`), work)
  }

  removeWork(userId, work) {
    remove(ref(firebaseDatabase, `works/${userId}/${work.time}`))
  }

  removeWorkAll(userId) {
    remove(ref(firebaseDatabase, `works/${userId}`))
  }
}

export default WorkRepository
