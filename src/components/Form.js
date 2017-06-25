import React from 'react';
import { Textfield, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import MapView from '../containers/Map'
import ReactStars from 'react-stars'
import cover from '../../public/images/cover.svg'

const Form = ({ handleSubmit, handleChange, getLocation, ratingChanged, name, note, lat, lng, rating }) => (
  <div style={{width: '90%', margin: 'auto'}}>
    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', marginBottom: '-25px', minHeight: '280px', background: 'url(' + cover + ') center / cover'}}></CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
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
      <Button raised accent ripple onClick={e => getLocation(e)}>Get Location</Button><Button raised colored style={{margin: '0 0 0 60px', width: '120px'}} type="submit">บันทึก</Button>
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
