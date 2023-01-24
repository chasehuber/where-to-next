
function Search ({ searchText, onChangeSearch }) {

    const handleSearch = (e) => {
        onChangeSearch(e.target.value)
    }
   
    return(
        <div>Search Trips:
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