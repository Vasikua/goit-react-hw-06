// import { useState,useEffect } from 'react'
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
export default function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  );
}


