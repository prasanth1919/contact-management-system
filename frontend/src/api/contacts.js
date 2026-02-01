const BASE_URL = "http://127.0.0.1:8000/api";

export async function fetchContacts() {
    const  response = await fetch(`${BASE_URL}/contacts/`);
    if(!response.ok){
        throw new Error("Failed to fetch contacts");
    }
    return response.json();
}

export async function searchContacts(query) {
  const response = await fetch(
    `${BASE_URL}/contacts/search/?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}

export async function createContact(contactData) {
  const res = await fetch(`${BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    throw new Error("Failed to create contact");
  }

  return res.json();
}

export async function deleteContact(id) {
  const res = await fetch(`${BASE_URL}/contacts/${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete contact");
  }
}

export async function updateContact(id, contactData) {
  const res = await fetch(`${BASE_URL}/contacts/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    throw new Error("Failed to update contact");
  }

  return res.json();
}
