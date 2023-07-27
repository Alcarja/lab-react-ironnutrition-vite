const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
  );
};

export default SearchBar;
