function SearchBar(props) {

    return(
        <div id="search">
            <input id="searchbar" type="text" onChange={ (e) => props.filterByName(e.target) } placeholder="Search" />
            <span className="flex-row"><input id="inStock" type="checkbox" onChange={ props.filterByStock } /><label htmlFor="inStock">In stock</label></span>
        </div>
    );
}

export default SearchBar;