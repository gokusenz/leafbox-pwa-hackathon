import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import coverAdd from '../../public/images/cover_add.jpg'
import coverList from '../../public/images/cover_list.jpg'

export default () => (
  <div>
    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', background: 'url(' + coverList +') no-repeat'}}></CardTitle>
      <CardText>
          คนเราเจ็บแล้วต้องจำ 
          ดังนั้น เจ็บจากร้านไหนมา เจ็บจากเมนูไหนมา หรือ ต้องการเตือนความจำ
      </CardText>
      <CardActions border>
          <Link to="/list"><Button colored>ดูข้อมูลทั้งหมด</Button></Link>
      </CardActions>
    </Card>

    <br />
    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
      <CardTitle expand style={{color: '#fff', width: '100%', background: 'url(' + coverAdd +') no-repeat'}}></CardTitle>
      <CardText>
          ให้จดใส่ไว้ในนี้ซะ
          เมื่อไหร่ ที่เข้าร้านอาหาร ให้เช็คในนี้ว่า เคยเจ็บจากที่นี่หรือยัง? เมนูไหนทำเจ็บ?
      </CardText>
      <CardActions border>
          <Link to="/add"><Button colored>เพิ่มข้อมูล</Button></Link>
      </CardActions>
    </Card>
  </div>
);