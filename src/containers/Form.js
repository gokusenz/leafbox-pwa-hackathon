import React, { Component } from 'react'
import FormComponent from '../components/Form'
import NoteModel from '../models/NoteModel'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      rating: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.mapPermission = this.mapPermission.bind(this)
    this.showPosition = this.showPosition.bind(this)
    this.showError = this.showError.bind(this)
    this.ratingChanged = this.ratingChanged.bind(this)
    this.noteModel = new NoteModel()
  }

  componentDidMount() {
    this.mapPermission()
  }

  handleSubmit(e) {
    e.preventDefault()
    const result = this.noteModel.saveData(
      e.target.name.value,
      e.target.note.value,
      this.state.lat,
      this.state.lng,
      this.state.rating
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      e.target.name.value = ''
      e.target.note.value = ''
      this.setState({
        rating: 0,
      })
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

  ratingChanged(newRating){
    console.log(newRating)
    this.setState({
      rating: newRating,
    })
  }

  getLocation(e) {
    e.preventDefault() 
    this.mapPermission()
  }

  mapPermission() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError)
    } else { 
        alert("Geolocation is not supported by this browser.")
    }
  }

  showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log(lat, lng)
    this.setState({
      lat,
      lng,
    })
  }

  showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
  }

  render() {
    const { name, note } = this.props;
    const { lat, lng, rating } = this.state;
    return (
      <div>
        <FormComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} getLocation={this.getLocation} ratingChanged={this.ratingChanged} name={name} note={note} lat={lat} lng={lng} rating={rating} />
      </div>
    );
  }
}

export default Form
