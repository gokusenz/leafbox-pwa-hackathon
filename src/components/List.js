import React from 'react';
import ListItemComponent from './ListItem'
import { List, ListItem, ListItemAction, ListItemContent, Icon, Textfield, FABButton, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import cover from '../../public/images/cover.svg'

const NoteList = ({ handleSearch, handleLocation, noteList }) => (
  <div>
    <div style={{ height: '600px' }}></div>
    <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', marginBottom: '-25px', minHeight: '280px', background: 'url(' + cover + ') center / cover'}}></CardTitle>
    </Card>
    <br />
    <div style={{width: '60%', minWidth: '200px', margin: '0 0 -10px 20px', padding: '0 20px', border: '0.5px solid', borderRadius: '5px'}}>
      <Textfield
        onChange={e => handleSearch(e)}
        name="search"
        label="Expandable Input"
        expandable
        expandableIcon="search"
        style={{width: '100%'}}
      />
    </div>
    <div style={{width: '17%', display: 'block', float: 'right', marginTop: '-55px'}}>
      <FABButton mini ripple style={{ marginTop: '10px'}} onClick={e => handleLocation(e)}>
          <Icon name="location_searching" />
      </FABButton>
    </div>
    <List style={{width: '100%', margin: 'auto'}}>
      {
        noteList.map(doc => (
          <ListItemComponent key={doc.id} item={doc} />
        ))
      }
    </List>
  </div>
)

export default NoteList;
