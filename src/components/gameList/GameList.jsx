import GameCategoryRow from "../gameCategoryRow/GameCategoryRow";
import GameRow from "../gameRow/GameRow";

function GameList({ games = [], filterText = '', inWishListOnly = false}) {
    const rows = [];
    let lastCategory = "";

    games.forEach((game) => {
            if (game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
             if (inWishListOnly && !game.inWishList) {
            return;
            }
            if (game.category !== lastCategory) {
                rows.push(
                    <GameCategoryRow category={game.category} key={game.id * 2}/>
                )
            }
            rows.push(
                <GameRow game={game} key={game.id * 4} />
            )
            lastCategory = game.category
        }
    )

    return (
        <ul className="filterable-game-list">
            { rows }
        </ul>
    );
}

export default GameList;