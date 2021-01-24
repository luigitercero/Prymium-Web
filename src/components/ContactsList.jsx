import React from 'react';
import  Link  from 'next/link';
import Image from 'next/image';

const ContactItem = ({ item }) =>{
  const { icon, alt, itemName, itemInfo, linkTo } = item;

  return(
    <Link href={linkTo}>
      <a target="_blank" className="contact-item">
        <div className="contact-icon">
          <Image src={icon} alt={alt} height={64} width={64} />
        </div>
        <span className="item-title">{itemName}</span>
        <span className="info">{itemInfo}</span>
      </a>
    </Link>
  )
}

const ContactsList = ({ contactsArray }) => {
  const getList = () =>(
      contactsArray.map(item => (<ContactItem key={item.id} item={item} />) )
    )

  return(
    <section className="contacts-list">
      {getList()}
    </section>
  )
}

export default ContactsList;