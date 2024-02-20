const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-label">
        <label>What are you looking for?</label>
        <input type="text" />
      </div>
      <div className="search-label">
        <label>Category</label>
        <select name="" id="">
          <option value="all">All</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
      </div>
      <div className="search-label">
        <label > Status </label>
        <select name="" id="">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      
      <button>Search</button>
    </div>
  );
};

export default SearchContainer;
