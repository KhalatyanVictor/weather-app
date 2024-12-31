function SearchPart({value, onChange,onClick}) {
  return (
    <div className="search">
      <input type="text" value={value} onChange={onChange} className="searchInput"/>
      <button onClick={onClick} className="searchBtn">Search</button>
    </div>
  );
}

export default SearchPart;
