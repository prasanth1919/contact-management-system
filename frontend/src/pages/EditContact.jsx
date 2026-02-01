import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { fetchContacts, updateContact } from "../api/contacts";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContacts().then(data => {
      const found = data.find(c => c.id === Number(id));
      setContact(found);
    });
  }, [id]);

  const handleUpdate = async (updatedData) => {
    await updateContact(id, updatedData);
    navigate("/");
  };

  if (!contact) return <p>Loading contact...</p>;

  return (
    <ContactForm
      initialData={{ ...contact, id }}
      onSubmit={handleUpdate}
    />
  );
};

export default EditContact;
