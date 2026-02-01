import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
