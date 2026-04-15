

const SearchItem = ({searchData,setSearchData}) => {
  return (
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="Search Item">Search Item</label>
        <input 
        type="text"
        placeholder="Search Item"
        id="searchItem"
        value={searchData}
        onChange={(e)=>setSearchData(e.target.value)}
        aria-label="Search Item"
        />

    </form>
  )
}

export default SearchItem