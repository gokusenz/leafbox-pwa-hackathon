import Database from '../libs/Database'
import DateLib from '../libs/Date'

class NoteModel {
  constructor() {
    this.db = Database
  }

  saveData(name, detail, lat, lng, rating) {
    try {
      const noteRef = this.db.ref(`note`)
      noteRef.set({
        name,
        detail,
        lat,
        lng,
        rating,
        date: DateLib.getCurDate(),
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  getList() {
    return this.db.ref(`note`).once('value')
  }

}

export default NoteModel
