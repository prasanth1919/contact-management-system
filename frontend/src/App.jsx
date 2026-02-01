import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

const App = () => {
  return (
    <div className="app-container">
      <h1>Contact Management System</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />

      </Routes>
    </div>

  );
};

export default App;
