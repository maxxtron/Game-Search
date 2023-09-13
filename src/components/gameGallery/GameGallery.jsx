function GameGallery( {images = [], id }) {

    return (
        <div className="game-gallery">{ images.map((image,index) => (
            <img key={index} src={image} alt="preview" />
        )) }</div>
    );
}

export default GameGallery;