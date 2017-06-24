import React from 'react';
import { Textfield, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import MapView from '../containers/Map'
import ReactStars from 'react-stars'

const Form = ({ handleSubmit, handleChange, getLocation, ratingChanged, name, note, lat, lng, rating }) => (
  <div style={{width: '90%', margin: 'auto'}}>
    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome to LeafBox</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>Get Started</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    <br />
    <form onSubmit={handleSubmit}>
      <Textfield
        name="name"
        onChange={e => handleChange(e, 'name')}
        label="ชื่อร้าน"
        floatingLabel
        required={true}
        style={{width: '100%'}}
      />

      <Textfield
        name="note"
        onChange={e => handleChange(e, 'note')}
        label="รายละเอียด"
        rows={3}
        floatingLabel
        required={true}
        style={{width: '100%'}}
      />
      <p>ความพึงพอใจ</p>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={'#ffd700'}
      value={rating}
      />
      <br />
      <br />
      <Button raised accent ripple onClick={e => getLocation(e)}>Get Location</Button><Button raised colored style={{margin: '0 0 0 50px'}} type="submit">บันทึก</Button>
      <br />
      <br />
      <MapView lat={lat} lng={lng} />
      <br />
      <br />
    </form>
    <br />
  </div>
)

export default Form;
