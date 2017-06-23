import database from './ConfigDB'

class Database {
  constructor() {
    this.db = database
  }

  saveData(name, yesterday, today, date, team) {
    try {
      this.db.ref(`${date}/${team}/${name}`).set({
        name,
        team,
        yesterday,
        today,
        date,
      })
      this.db.ref(`YESTERDAY/${team}/${name}`).set({
        name,
        team,
        yesterday,
        today,
        date,
      })
      return true
    } catch (error) {
      return false
    }
  }

  getList(date, team) {
    return this.db.ref(`/${date}/${team}`).once('value')
  }

  getYesterday(team, name) {
    return this.db.ref(`YESTERDAY/${team}/${name}`).once('value')
  }
}

export default Database
