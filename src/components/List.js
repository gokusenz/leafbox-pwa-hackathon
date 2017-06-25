import React from 'react';
import ListItemComponent from './ListItem'
import { List, ListItem, ListItemAction, ListItemContent, Icon, Textfield } from 'react-mdl';

const NoteList = ({ handleSearch, noteList }) => (
  <div>
    <div style={{width: '80%', margin: '120px auto -10px auto', padding: '0 30px', border: '0.5px solid', borderRadius: '5px'}}>
      <Textfield
        onChange={e => handleSearch(e)}
        name="search"
        label="Expandable Input"
        expandable
        expandableIcon="search"
        style={{width: '100%'}}
      />
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
