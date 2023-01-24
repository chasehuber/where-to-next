
function Search ({ searchText, onChangeSearch }) {

    const handleSearch = (e) => {
        onChangeSearch(e.target.value)
    }
   
    return(
        <div className="border-2 border-black m-2 mt-3 font-mono p-2">
            <label htmlFor="search">Search Trips:</label>
            <input 
                type="text" 
                id="search" 
                placeholder=" Search by city name..."
                value={searchText}
                onChange={handleSearch}
            />
        </div>

    )
}

export default Search;