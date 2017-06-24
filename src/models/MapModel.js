import database from '../libs/db'

class MapModel {
  constructor() {
    this.db = database
  }

  saveData(name, topic, feedback, level) {
    try {
      const workshopRef = this.db.ref(`workshop/${name}`)
      workshopRef.push().set({
        topic,
        feedback,
        level,
        date: DateLib.getCurDate(),
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  getList(name) {
    return this.db.ref(`workshop/${name}`).once('value')
  }

}

export default MapModel
