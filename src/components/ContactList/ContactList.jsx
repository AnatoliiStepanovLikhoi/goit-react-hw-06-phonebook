// import { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

import { ContactsList, ContactsMessage } from './ContactList.styled';
import { useSelector } from 'react-redux';

export function ContactList(props) {
  // const { contacts, onContactDelete } = props;

  //   console.log(onContactDelete);

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // console.log(contacts);

  const selectedContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ContactsList>
      {selectedContacts.length ? (
        selectedContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contactInfo={contact}
            // onContactDelete={onContactDelete}
          />
        ))
      ) : (
        <ContactsMessage>We found nothing here:(</ContactsMessage>
      )}
    </ContactsList>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onContactDelete: PropTypes.func.isRequired,
// };
