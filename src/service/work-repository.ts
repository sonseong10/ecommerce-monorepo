import { firebaseDatabase } from './firebase'
import { ref, onValue, off, set, remove } from 'firebase/database'

class WorkRepository {
  syncWorks(
    userId: string,
    onUpdate: (value: {
      [key: string]: {
        contents: string
        time: number
        title: string
      }
    }) => void
  ) {
    const query = ref(firebaseDatabase, `works/${userId}`)
    onValue(query, (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(query)
  }

  saveWork(
    userId: string,
    work: {
      contents: string
      time: number
      title: string
    }
  ) {
    set(ref(firebaseDatabase, `works/${userId}/${work.time}`), work)
  }

  removeWork(
    userId: string,
    work: {
      contents: string
      time: number
      title: string
    }
  ) {
    remove(ref(firebaseDatabase, `works/${userId}/${work.time}`))
  }

  removeWorkAll(userId: string) {
    remove(ref(firebaseDatabase, `works/${userId}`))
  }
}

export default WorkRepository
