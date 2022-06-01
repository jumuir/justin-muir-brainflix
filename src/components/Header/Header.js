import reactRouterDom from 'react-router-dom';
import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logo} alt='Brainflix logo'/>
            </div>
            
            <div className='header__right'>
                
                <input className='header__search-container' type='text' placeholder='Search'></input> 
                
                <Link to='/upload' className='header__upload-link'>
                    <button className='header__upload-button'>      
                        <p>UPLOAD</p>
                    </button>
                </Link>
                
                <div className='header__image'></div>
            
            </div>
        </header>
    )

}

export default Header