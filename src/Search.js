function Search ({ searchText, onChangeSearch }) {

    const handleSearch = (e) => {
        onChangeSearch(e.target.value)
    }
   
    return(
        <div className="border-2 border-black m-2 mt-3 font-mono p-2 dark:border-slate-600">
            <label htmlFor="search" className="dark:text-white">Search Trips:</label>
            <input 
                type="text" 
                id="search" 
                placeholder=" Search by city name..."
                value={searchText}
                onChange={handleSearch}
                className="dark:bg-gray-900 dark:text-white"
            />
        </div>
    )
}

export default Search;