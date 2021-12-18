import {shovel} from '../../assets/index.js';

const Header = () => {

    return (
        
        <header className="header">
            <div className='logo-container'>
                <div className="logo-image-container">
                    <img className="logo-image" src={shovel} alt='logo' width={50} height={50}></img>
                </div>

                <div className="page-title-container">
                    <h1>Maori's Pixel Art</h1>
                </div>
            </div>
            <div>
                github icon
            </div>
            
        </header>
    );
};

export default Header;