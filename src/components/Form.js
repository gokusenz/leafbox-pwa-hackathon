import React from 'react';
import { Textfield, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import MapView from '../containers/Map'
import ReactStars from 'react-stars'
import cover from '../../public/images/cover.svg'

const Form = ({ handleSubmit, handleChange, getLocation, ratingChanged, name, note, lat, lng, rating }) => (
  <div style={{width: '90%', margin: 'auto'}}>
    <div style={{ height: '500px' }}></div>
    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', marginBottom: '-25px', minHeight: '280px', background: 'url(' + cover + ') center / cover'}}></CardTitle>
        <CardText>
            คนเราเจ็บแล้วต้องจำ 
            ดังนั้น เจ็บจากร้านไหนมา เจ็บจากเมนูไหนมา หรือ ต้องการเตือนความจำ 
            ให้จดใส่ไว้ในนี้ซะ
            เมื่อไหร่ ที่เข้าร้านอาหาร ให้เช็คในนี้ว่า เคยเจ็บจากที่นี่หรือยัง? เมนูไหนทำเจ็บ?
        </CardText>
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
