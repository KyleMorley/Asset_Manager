import { useState } from "react"

const SearchAsset = ({ searchAsset }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    searchAsset(searchTerm);
    setSearchTerm('')
  }

  return (
    <form className="search-asset" onSubmit={submitSearch}>
        <input type='text' placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
    </form>
  )
}

export default SearchAsset