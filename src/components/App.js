import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { saveToLS, getFromLS } from 'components/helpers';
import { Box } from './Box';

function App() {
	const [contacts, setContacts] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const parsedContacts = getFromLS('contacts');
		if (parsedContacts) {
			setContacts(parsedContacts);
		}
	}, []);

	useEffect(() => {
		saveToLS('contacts', contacts);
	}, [contacts]);

	const addContact = ({ name, number }) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		const normolizedName = name.toLowerCase();
		if (
			contacts.find(contact => contact.name.toLowerCase() === normolizedName)
		) {
			return alert(`${name} is already in contacts`);
		}

		setContacts([...contacts, contact]);
	};

	const changeFilter = e => {
		setFilter(e.currentTarget.value);
	};

	const getVisibleContacts = () => {
		const normolizedFiter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normolizedFiter),
		);
	};

	const deleteContact = contactId => {
		setContacts(contacts =>
			contacts.filter(contact => contact.id !== contactId),
		);
	};
	return (
		<Box display="flex" alignItems="center" flexDirection="column">
			<Box>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={addContact} />
				<h2>Contacts </h2>
				<Filter value={filter} onChange={changeFilter} />
				<ContactList
					contacts={getVisibleContacts()}
					onDeleteContact={deleteContact}
				/>
			</Box>
		</Box>
	);
}
export default App;
