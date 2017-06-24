import React, { Component } from 'react'
import FormComponent from '../components/Form'
import NoteModel from '../models/NoteModel'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lon: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.showError = this.showError.bind(this);
    this.state = {}
    this.noteModel = new NoteModel()
  }

  componentDidMount() {
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const result = this.noteModel.saveData(
      e.target.name.value,
      e.target.note.value,
      0,
      0,
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      e.target.name.value = ''
      e.target.note.value = ''
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

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError)
    } else { 
        alert("Geolocation is not supported by this browser.")
    }
  }

  showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let latlon = new google.maps.LatLng(lat, lon)
    console.log(lat, lon)
    this.setState({
      lat,
      lon,
      latlon,
    })
    // mapholder = document.getElementById('mapholder')
    // mapholder.style.height = '250px';
    // mapholder.style.width = '500px';

    // var myOptions = {
    //   center:latlon,zoom:14,
    //   mapTypeId:google.maps.MapTypeId.ROADMAP,
    //   mapTypeControl:false,
    //   navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    // }
    
    // var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    // var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
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
    const { lat, lon, latlon } = this.state;
    return (
      <div>
        <FormComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} getLocation={this.getLocation} name={name} note={note} latlon={latlon} />
      </div>
    );
  }
}

export default Form
