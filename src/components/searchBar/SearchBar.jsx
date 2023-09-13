function SearchBar({ filterText = '', setFilterText , inWishListOnly = false, setInWishListOnly}) {
    return (
        <form className="filter-form">
            <input type="text"
                   className="search-input"
                   placeholder="Search by name"
                   value={filterText}
                   onChange={e => setFilterText(e.target.value)}
            />
            <label >
                <input
                    type="checkbox"
                    className="in-whish-list-checkbox"
                    value={inWishListOnly}
                    onChange={e => setInWishListOnly(e.target.checked)}

                />
                Wishlist only
            </label>
        </form>
    );
}

export default SearchBar;