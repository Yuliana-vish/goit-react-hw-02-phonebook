import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import initialContacts from './components/Contacts/initialContacts.json'
import './App.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleNewContact = contact => {
    let { contacts } = this.state;
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleContactSearch = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <>
        <section className="phonebook">
          <Title title="Phonebook" />
          <Form addContact={this.handleNewContact} />
        </section>
        <section className="contacts">
          <Title title="Contacts" />
          <Filter searchContact={this.handleFilter} value={filter} />
          <Contacts
            searchContact={this.handleContactSearch()}
            deleteContact={this.deleteContact}
          />
        </section>
      </>
    );
  }
}

export default App;