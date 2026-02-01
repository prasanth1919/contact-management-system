# Contact Management System

A full-stack Contact Management System built as part of a first-round interview assignment.

The application allows users to add, view, edit, delete, and search contacts using a clean UI and RESTful backend APIs.

---

## 🚀 Features

- Add new contacts
- View all contacts
- Edit existing contacts
- Delete contacts
- Search contacts by name, email, company, or tags
- Responsive and animated UI
- REST API–based backend
- Separate frontend and backend folders
- Custom CSS used for layout, responsiveness, and UI animations (with AI-assisted styling for polish)
---

## 🛠 Tech Stack

Backend Setup:
```

cd backend
python -m venv luffy
luffy\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Backend runs at:
http://127.0.0.1:8000

Frontend Setup:
```
cd frontend
npm install
npm run dev
```
Frontend runs at:
http://localhost:5173
---

## API Endpoints:

- GET    /api/contacts/
- POST   /api/contacts/
- PUT    /api/contacts/{id}/
- DELETE /api/contacts/{id}/
- GET    /api/contacts/search/?q=

