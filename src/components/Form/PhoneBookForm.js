import PropTypes from 'prop-types';
import css from './PhoneBookForm.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  nameInputId = nanoid();
  telInputId = nanoid();
  render() {
    const { submit, change } = this.props;
    return (
      <>
        <form
          onSubmit={submit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            alignItems: 'center',
            border: '2px solid red',
            borderRadius: '4px',
            padding: '20px',
          }}
        >
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            id={this.nameInputId}
            onChange={change}
            type="text"
            name="concatName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.telInputId}>Number</label>
          <input
            id={this.telInputId}
            onChange={change}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
