import React, {useState} from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */



  const [appointment, setAppointment] = useState({
    title: '',
    name: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(appointment);
    setAppointment({
      title: '',
      name: '',
      date: '',
      time: ''
    })

  };

  const handleChange = ({target}) => {
    setAppointment({...appointment, [target.name]: target.value})
  } 

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm appointment={appointment} setAppointment={setAppointment} submit={handleSubmit} onChange={handleChange} contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments}/>
      </section>
    </div>
  );
};
