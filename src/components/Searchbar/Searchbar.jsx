import React from 'react'


function Searchbar({ onSearch }) {
    
    const handleSearch = e => {
        const nameValue = e.target.elements.searchName.value.toLowerCase();
    e.preventDefault();
     if (nameValue.trim() === '') {
      return alert('Enter valid name,please!');
    }
      onSearch(nameValue)
  };
    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSearch}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      name="searchName"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

export default Searchbar





