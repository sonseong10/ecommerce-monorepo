import { firebaseDatabase } from './firebase'

class WorkRepository {
  syncWorks(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`works/${userId}`)
    ref.on('value', (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }

  saveWork(userId, work) {
    firebaseDatabase.ref(`works/${userId}/${work.time}`).set(work)
  }

  removeWork(userId, work) {
    firebaseDatabase.ref(`works/${userId}/${work.time}`).remove()
  }

  removeWorkAll(userId) {
    firebaseDatabase.ref(`works/${userId}`).remove()
  }
}

export default WorkRepository
