import React, { useState, useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="logo-container">
      </div>
      <input
        type="search"
        value={searchValue}
        placeholder="O que você deseja hoje?"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
