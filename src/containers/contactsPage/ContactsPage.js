import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
    addContact(contact);
    setContact({
      name: '',
      phone: '',
      email: ''
    })
   }
  };

  const handleChange = ({target}) => {
    setContact({...contact, [target.name]: target.value})
  } 

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const isDuplicate = contacts.some( entry => entry.name === contact.name);
    setDuplicate(isDuplicate);
  }, [contact]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contact={contact} setContact={setContact} submit={handleSubmit} onChange={handleChange} isDuplicate={duplicate}/>        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts}/>
      </section>
    </div>
  );
};
