import firebaseApp from './firebase'
class CardRepository {
  syncCards(onUpdate) {
    const ref = firebaseApp.database().ref(`cards`)
    ref.on('value', (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }

  userCard(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`cards`)
    ref
      .orderByKey()
      .equalTo(`${userId}`)
      .on('value', (snapshot) => {
        const value = snapshot.val()
        value && onUpdate(value)
      })
    return () => ref.off()
  }

  saveCard(userId, card) {
    firebaseApp.database().ref(`cards/${userId}`).set(card)
  }

  removeCard(userId) {
    firebaseApp.database().ref(`cards/${userId}`).remove()
  }
}

export default CardRepository
