import ContactForm from "../components/ContactForm";
import { createContact } from "../api/contacts";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();

  const handleAddContact = async (data) => {
    await createContact(data);
    navigate("/");
  };

  return (
    <div>
      <ContactForm onSubmit={handleAddContact} />
    </div>
  );
};

export default AddContact;
