import { Component } from 'react';
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

  componentDidMount() {
    //console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) { this.setState({ contacts: parsedContacts }); }
  }
  componentDidUpdate(prevState) {
    //console.log('App componentDidUpdate');
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      //console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }


  onAddContact = contact => {
    let { contacts } = this.state;
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
    //console.log('добавляю контакт');
  };

  onFilterContact = filter => {
    this.setState({ filter });
  };

  onSearchContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <>
        <section className="phonebook">
          <Title title="Phonebook" />
          <Form onAddContact={this.onAddContact} />
        </section>
        <section className="contacts">
          <Title title="Contacts" />
          <Filter onSearchContact={this.onFilterContact} value={filter} />
          <Contacts
            onSearchContact={this.onSearchContact()}
            onDeleteContact={this.onDeleteContact}
          />
        </section>
      </>
    );
  }
}

export default App;