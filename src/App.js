import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import './app.css';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const Michael = {
    name: 'Michael',
    phone: '570-726-888',
    email: 'mihail.kapush@gmail.com'
  }

  const Zo = {
    name: 'Zofia',
    phone: '570-726-888',
    email: 'oszczepalinska.mazurkiewicz@multidekor.com'
  }

  const Zu = {
    name: 'Zuza',
    phone: '570-726-888',
    email: 'Mihail.kapush@.sdasd.c'
  }

  const To = {
    name: 'Tmk',
    phone: '570-726-888',
    email: 'tmk@o2.pl'
  }

  const codeReview = {
    title: 'Code Review',
    name: 'Michael',
    date: '2023-04-01',
    time: '15:30'
  }

  const [contacts, setContacts] = useState([Michael, Zo, To, Zu]); 
  const [appointments, setAppointments] = useState([codeReview]); 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments} 
              addAppointment={addAppointment}
              contacts={contacts} 
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
