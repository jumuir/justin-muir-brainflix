import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import searchImg from '../../assets/images/icons/search.svg';
import uploadImg from '../../assets/images/icons/upload.svg';
import './Header.scss';

const Header = () => {
    return (<>
        <div className='header'>
            <div className='header__logo'><img src={logo} alt='Brainflix logo'/></div>
            <div className='header__right'>
                <div className='header__search-container'>
                    <img src={searchImg}/>
                    <input type='text' placeholder='Search'></input> 
                </div>
                <button type='submit' value='submit' className='header__upload-button'>
                    <img src={uploadImg}/>
                    <p>UPLOAD</p>
                </button>
                <div className='header__image'></div>
            </div>
        </div>
    </>
    )

}

export default Header