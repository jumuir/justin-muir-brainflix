import logo from '../../assets/images/logos/BrainFlix-logo.svg';
import './Header.scss';

const Header = () => {
    return (<>
        <div className='header'>
            <div className='header__logo'><img src={logo} alt='Brainflix logo'/></div>
            <div className='header__form'>
                <p>Hello World</p>
            </div>
        </div>
    </>
    )

}

export default Header