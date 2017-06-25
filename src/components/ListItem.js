import React from 'react'
import { List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';
import ratingGood from '../../public/images/rating_good.svg'
import ratingMid from '../../public/images/rating_mid.svg'
import ratingBad from '../../public/images/rating_bad.svg'

const ListItems = (props) => {
  const {
    item,
  } = props
  let rating = ratingMid
  if(item.rating > 3.5) {
    rating = ratingGood
  } else if(item.rating < 2.5) {
    rating = ratingBad
  }
  return (
    <ListItem threeLine>
      <ListItemContent avatar={<img src={rating} style={{background: 'none'}} />} subtitle={item.detail}>{item.name}</ListItemContent>
    </ListItem>
  )
}

export default ListItems
