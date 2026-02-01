import React, { useEffect, useState } from 'react'
import { fetchContacts ,searchContacts,createContact,deleteContact} from '../api/contacts';
import ContactCard from "../components/ContactCard";
import SearchBar from '../components/SearchBar';
import ContactForm from '../components/ContactForm';
import { Link } from "react-router-dom";


const Home = () => {
    const [contacts,setContacts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        fetchContacts()
        .then(data=>{
            setContacts(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err.message);
            setLoading(false);
        });
    },[]);
    if (loading) return <p>Loading contacts..</p>
    if (error) return <p>{error}</p>

const handleSearch = (query) => {
  if (!query) {
    fetchContacts().then(setContacts);
    return;
  }

  searchContacts(query).then(setContacts);
};

const handleAddContact = async (contactData) => {
  try {
    const newContact = await createContact(contactData);
    setContacts([newContact, ...contacts]);
  } catch (err) {
    setError(err.message);
  }
};

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this contact?")) {
    return;
  }

  try {
    await deleteContact(id);
    setContacts(contacts.filter(c => c.id !== id));
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div>

        <Link to="/add" className="add-btn">+ Add Contact</Link>

        <SearchBar onSearch={handleSearch} />
        
        <h2>Contacts</h2>

        <div className="cards-grid">
            {contacts.map(contact => (
                <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDelete}
                />
            ))}
        </div>
    </div>

  )
}

export default Home