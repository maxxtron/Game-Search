function GameCategoryRow({ category = "" }) {
    return (
        <li>
            <h2 className="game-category">
                { category }
            </h2>
        </li>
    );
}

export default GameCategoryRow;