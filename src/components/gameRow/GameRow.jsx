import GameGallery from "../gameGallery/GameGallery";


function GameRow({ game = {}}) {
    return (
        <li className="game-row">
            <span className="game-name">{game.name}</span>
            { game.inWishList && <span className="game-in-whish-list">In the desired</span> }
            <GameGallery images = {game.images} id={game.id}/>
            <span className="game-price">{game.price}</span>
        </li>
    );
}

export default GameRow;