import { Link } from "react-router-dom";
import "./ContactCard.css";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="contact-card">
      
      <div className="card-body">
        <h3>{contact.name}</h3>
        <p className="email">{contact.email}</p>
        <p className="phone">{contact.phone}</p>

        {contact.company && <p><strong>Company:</strong> {contact.company}</p>}
        {contact.tags && <p><strong>Tags:</strong> {contact.tags}</p>}
        {contact.notes && <p className="notes">{contact.notes}</p>}
      </div>

      <div className="card-footer">
        <Link to={`/edit/${contact.id}`} className="edit-btn">
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default ContactCard;
