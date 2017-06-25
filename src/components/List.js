import React from 'react';
import ListItemComponent from './ListItem'
import { List, ListItem, ListItemAction, ListItemContent, Icon, Textfield, FABButton } from 'react-mdl';

const NoteList = ({ handleSearch, noteList }) => (
  <div>
    <div style={{ height: '300px' }}></div>
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
      <FABButton mini ripple style={{ marginTop: '10px'}}>
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
