import {Link} from 'react-router-dom';

import logo from '../assets/Logo/Logo-brainflix.png';
import uploadIcon from '../assets/Icons/PNG/Icon-upload.png';

function Header(props) {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav__logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="main-nav__right">
                    <input type="search" className="main-nav__search" placeholder="Search" />
                    <div className="main-nav__list">
                        <Link to="/upload" className="main-nav__upload">
                            <img alt="Upload Icon" src={uploadIcon} />
                            UPLOAD
                        </Link>
                        <img alt="Male Avatar" className="main-nav__avatar" src="./images/Mohan-muruge.jpg" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;