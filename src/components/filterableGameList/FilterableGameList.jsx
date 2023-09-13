import SearchBar from "../searchBar/SearchBar";
import GameList from "../gameList/GameList";
import { useState } from "react";

function FilterableGameList({ games = [] }) {
    const [filterText,setFilterText] = useState('');
    const [inWishListOnly,setInWishListOnly] = useState(false)
    return (
        <div className="filterable-game-list">
            <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
                inWishListOnly={inWishListOnly}
                setInWishListOnly={setInWishListOnly}
            />
            <GameList
                games={games}
                filterText={filterText}
                inWishListOnly={inWishListOnly}
            />
        </div>
    );
}

export default FilterableGameList;