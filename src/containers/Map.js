import React, { Component } from 'react'
const GoogleMapsLoader = require('google-maps');

export class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    GoogleMapsLoader.KEY = process.env.mapKey;
    GoogleMapsLoader.LANGUAGE = 'th';
    GoogleMapsLoader.REGION = 'TH';
    GoogleMapsLoader.SENSOR = false;
    this.showMap = this.showMap.bind(this)
  }

  componentDidMount() {
    this.showMap(this.props.lat, this.props.lng)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.lat !== this.props.lat | nextProps.lng !== this.props.lng) {
      this.showMap(nextProps.lat, nextProps.lng)
    }
  }

  showMap(lat, lng) {
    console.log(lat, lng)
    let mapholder = document.getElementById('map')
    mapholder.style.height = '250px';
    mapholder.style.width = '100%';

    GoogleMapsLoader.load(function(google) {
      let latlng = new google.maps.LatLng(lat, lng)
      var myOptions = {
        center:latlng,
        zoom:20,
        language:"th",
        region:"TH",
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
      }
      
      var map = new google.maps.Map(document.getElementById("map"), myOptions);
      var marker = new google.maps.Marker({position:latlng,map:map,title:"You are here!"});
    });
  }

  render() {
    
    return (
      <div>
        <div id="map">I should be a map!</div>
      </div>
    );
  }
}

export default MapView
