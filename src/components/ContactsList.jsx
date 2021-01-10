import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/contacts-list.scss';

const ContactItem = ({ item }) =>{
  const { iconClasses, itemName, itemInfo, linkTo } = item;

  return(
    <Link to={linkTo} className="contact-item">
      <span className={`${iconClasses} contact-icon`} />
      <span className="item-title">{itemName}</span>
      <span className="info">{itemInfo}</span>
    </Link>
  )
}

const ContactsList = ({ contactsArray }) => {
  const getList = () =>{
    return(
      contactsArray.map(item => { return(<ContactItem key={item.id} item={item} />) } )
    )
  }

  return(
    <section className="contacts-list">
      {getList()}
    </section>
  )
}

export default ContactsList;