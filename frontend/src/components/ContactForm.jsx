import { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    company: initialData.company || "",
    tags: initialData.tags || "",
    notes: initialData.notes || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);   
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>{initialData.id ? "Edit Contact" : "Add Contact"}</h3>

      <input name="name" placeholder="Full Name"value={form.name} onChange={handleChange} required/>

      <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required/>

      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required/>

      <input name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange}/>

      <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange}/>

      <textarea name="notes" placeholder="Notes / Description" value={form.notes} onChange={handleChange}/>


      <button type="submit">
        {initialData.id ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
