import React, { Component } from 'react'
import HomeComponent from '../components/Home'
import NoteModel from '../models/NoteModel'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      feedback: '',
    }
    this.noteModel = new NoteModel()
  }

  componentDidMount() {
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const result = this.noteModel.saveData(
      this.props.name,
      e.target.topic.value,
      e.target.feedback.value,
      e.target.level.value,
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      e.target.topic.value = ''
      e.target.feedback.value = ''
    } else {
      alert('บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }

  handleChange(event, fieldName) {
    let state = {}
    state[fieldName] = event.target.value
    console.log(event.target.value)
    this.setState(state)
  }

  render() {
    const { name, note } = this.props;
    return (
      <div>
        <HomeComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} name={name} note={note} />
      </div>
    );
  }
}

export default Home
