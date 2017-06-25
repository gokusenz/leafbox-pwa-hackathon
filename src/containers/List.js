import React, { Component } from 'react'
import ListComponent from '../components/List'
import NoteModel from '../models/NoteModel'

export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteList: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.noteModel = new NoteModel()
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    this.noteModel.getList()
    .then(result => {
      let noteList = result
      const arr = []
      const r = noteList.val()
      for (const i in r) {
        arr.push({ id: i, ...r[i] })
      }
      this.setState({
        noteList: arr,
      })
    })
  }

  handleSearch(e) { 
    this.noteModel.getSearch(e.target.value)
    .then(result => {
      let noteList = result
      const arr = []
      const r = noteList.val()
      for (const i in r) {
        arr.push({ id: i, ...r[i] })
      }
      this.setState({
        noteList: arr,
      })
    })
  }

  handleLocation(e) {
    console.log('location')
    e.preventDefault() 
    this.getList()
  }

  render() {
    return (
      <div>
        <ListComponent handleSearch={this.handleSearch} handleLocation={this.handleLocation} noteList={this.state.noteList} />
      </div>
    );
  }
}

export default List
