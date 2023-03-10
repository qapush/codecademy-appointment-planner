import React from "react";

export const ContactPicker = ({contacts, onChange, appointment}) => {

  const options = contacts.map( item => {
    return <option key={item.name} value={item.name}>{item.name}</option>
  } )

  return (
    <select name="name" onChange={onChange} value={appointment.name} required>
      <option value="" disabled>-- select contact --</option>
      {options}
    </select>
  );
};
