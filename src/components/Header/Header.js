import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='header__logo'>
                    <img src={logo} alt='Brainflix logo'/>
                </div>
            </Link>
            
            <div className='header__right'>
                
                <input className='header__search-container' type='text' placeholder='Search'></input> 
                
                <Link to='/upload' className='header__upload-button' id='header-upload'> 
                        <p>UPLOAD</p>
                </Link>
                
                <div className='header__image'></div>
            
            </div>
        </header>
    )

}

export default Header