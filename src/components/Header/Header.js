import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import './Header.scss';

const Header = () => {
    return (<>
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt='Brainflix logo'/>
            </div>
            
            <div className='header__right'>
                
                <input className='header__search-container' type='text' placeholder='Search'></input> 
                
                <button type='submit' value='submit' className='header__upload-button'>      
                    <p>UPLOAD</p>
                </button>
                
                <div className='header__image'></div>
            
            </div>
        </div>
    </>
    )

}

export default Header