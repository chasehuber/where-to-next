
function Search ({ searchText, onChangeSearch }) {

    const handleSearch = (e) => {
        onChangeSearch(e.target.value)
    }
   
    return(
        <div>
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