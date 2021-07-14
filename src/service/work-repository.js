import firebaseApp from './firebase'

class WorkRepository {
  syncWorks(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`works/${userId}`)
    ref.on('value', (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }

  saveWork(userId, work) {
    firebaseApp.database().ref(`works/${userId}/${work.time}`).set(work)
  }

  removeWork(userId, work) {
    firebaseApp.database().ref(`works/${userId}/${work.time}`).remove()
  }
}

export default WorkRepository
