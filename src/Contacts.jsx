import React from "react";
import Card from "./Card";
import contacts from "./contacts";

const CreateCard = (contact) => {
  return (
    <Card
      key={contact.id}
      id ={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
};
const Contacts = () => {
  return <>{contacts.map(CreateCard)}</>;
};

export default Contacts;
