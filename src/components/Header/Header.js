import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import './Header.scss';

const Header = () => {
    return (<>
        <div className='header'>
            <div className='header__logo'><img src={logo} alt='Brainflix logo'/></div>
            <div className='header__right'>
                <div className='header__search-container'>
                    <img src="../../assets/images/icons/search.svg"/>
                    <input type='text' placeholder='Search'></input> 
                </div>
                <input type='submit' value='submit' className='header__upload-button'>
                    <img src="../../assets/images/icons/upload.svg"/>
                    UPLOAD
                </input>
                <div className='header__image'>
                     <img src="../../assets/images/images/Mohan-muruge.jpg"/>
                </div>
            </div>
        </div>
    </>
    )

}

export default Header