import { firebaseDatabase } from './firebase'
class CardRepository {
  syncCards(onUpdate) {
    const ref = firebaseDatabase.ref(`cards`)
    ref.on('value', (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`cards/${userId}`).set(card)
  }

  removeCard(userId) {
    firebaseDatabase.ref(`cards/${userId}`).remove()
  }
}

export default CardRepository
