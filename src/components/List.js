import React from 'react';
import ListItemComponent from './ListItem'
import { List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';

const NoteList = ({ handleClick, noteList }) => (
  <List style={{width: '100%', margin: 'auto'}}>
    {
      noteList.map(doc => (
        <ListItemComponent key={doc.id} item={doc} />
      ))
    }
  </List>
)

export default NoteList;
