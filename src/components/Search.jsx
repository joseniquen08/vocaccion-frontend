const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="relative mb-4 text-gray-300 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input type="text" value={search} ref={searchInput} onChange={handleSearch} name="q" className="py-2 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-md w-72 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Buscar..." autoComplete="off" />
    </div>
  );
}

export default Search;