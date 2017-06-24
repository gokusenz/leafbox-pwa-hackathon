import Database from '../libs/Database'
import DateLib from '../libs/Date'

class NoteModel {
  constructor() {
    this.db = Database
  }

  saveData(name, detail, lat, lng, rating) {
    try {
      const noteRef = this.db.ref(`note/${name}`)
      noteRef.push().set({
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

  getList(name) {
    return this.db.ref(`note/${name}`).once('value')
  }

}

export default NoteModel
