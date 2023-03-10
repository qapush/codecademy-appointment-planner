import React from "react";



export const ContactForm = ({
  contact,
  submit,
  onChange,
  isDuplicate
}) => {
  return (
    <form onSubmit={submit}>
      <input required name="name" placeholder="Name" type="text" value={contact.name} onChange={onChange}/>
      {isDuplicate && <p className="warning">Contact with this name already exists</p> }
      <input required name="phone" placeholder="Phone ###-###-###" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" value={contact.phone} onChange={onChange}/>
      <input required name="email" placeholder="Email" type="email" value={contact.email} onChange={onChange} />
      <input type="submit" value="Submit"/>
    </form>
  );
};

