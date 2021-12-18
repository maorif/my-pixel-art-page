import PropTypes from 'prop-types';

const PixelArtCard = ({pixelArt, title, description}) => {

    console.log(pixelArt);
    return (
        <div className="pixel-art-card">
            <div className="image-container">
                <img src={pixelArt} alt={title} width={200} height={200}></img>
            </div>
            <div className="title-container">
                <h2 className="title">{title}</h2>
            </div>
            <div className="description-container">
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

PixelArtCard.propTypes = {
    pixelArt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default PixelArtCard;
