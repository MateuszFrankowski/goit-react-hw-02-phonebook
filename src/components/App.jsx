import React, { Component } from 'react';
import { ContactForm } from './Form/PhoneBookForm';
import { ContactsList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { value, id, name } = evt.target;
    if (name === 'concatName') {
      const Newcontact = { id: id, name: value };
      this.setState({ name: Newcontact });
    }
    if (name === 'number') {
      this.setState({ number: value });
    }
    if (name === 'number') {
      this.setState({ number: value });
    }
    if (name === 'filter') {
      this.setState({ filter: value });
    }
  };
  handleRemoveData = evt => {
    let array = [...this.state.contacts];
    console.log('array,', array);
    const nameToRemove = evt.target.id;

    const removeContact = name => {
      const index = array.findIndex(function (contact) {
        return contact.name === name;
      });
      if (index > -1) {
        array.splice(index, 1);
        this.setState({ contacts: array });
      }
    };
    removeContact(nameToRemove);
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = this.state.name;
    const newContactName = this.state.name.name;
    newContact.number = this.state.number;

    if (this.state.contacts.find(element => element.name == newContactName)) {
      return alert(newContactName + ' is already in contacts');
    }
    this.setState({ contacts: [...this.state.contacts, newContact] });
    // this.props.onSubmit({ ...this.state });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleSubmit} change={this.handleChange} />
        {this.state.contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter change={this.handleChange} />
            <ContactsList data={this.state} remove={this.handleRemoveData} />
          </div>
        )}
      </div>
    );
  }
}
