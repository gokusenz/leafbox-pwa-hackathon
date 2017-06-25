import React, { Component } from 'react'
import ListComponent from '../components/List'
import NoteModel from '../models/NoteModel'

export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteList: [],
    }
    this.handleClick = this.handleClick.bind(this)
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

  handleClick() {
    console.log('click')
  }


  render() {
    return (
      <div>
        <ListComponent handleClick={this.handleClick} noteList={this.state.noteList} />
      </div>
    );
  }
}

export default List
