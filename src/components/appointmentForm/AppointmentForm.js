import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  appointment,
  submit,
  onChange,
  contacts
}) => {
  
  const getTodayString = () => {
    const [day, month, year] = new Date()
      .toLocaleDateString("pl-PL")
      .split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="title" placeholder="Title" value={appointment.title} onChange={onChange} required/>
      <input type="date" name="date" value={appointment.date} onChange={onChange} min={getTodayString()} required/>
      <input type="time" name="time" value={appointment.time} onChange={onChange}  required/>
      <ContactPicker contacts={contacts} onChange={onChange} appointment={appointment}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};
