import React from 'react';
import { Textfield, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';


const Home = ({ handleSubmit, handleChange, name, note }) => (
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
        label="Note"
        rows={3}
        required={true}
        style={{width: '100%'}}
      />

      <Button raised colored type="submit">บันทึก</Button>
    </form>

  </div>
)

export default Home;
