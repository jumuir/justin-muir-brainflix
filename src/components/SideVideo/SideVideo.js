import './SideVideo.scss';
import { Link } from 'react-router-dom';


const SideVideo = (props) => {

    return (
        <Link to = {`/${props.id}`}>
            <div className='side-video__container'>
                <div className='side-video__image-container'>
                    <img className='side-video__image' src={props.image} alt=''/>
                </div>
                <div className='side-video__copy'>
                    <p className='side-video__title'>
                        {props.title}
                    </p>
                    <p className='side-video__channel'>
                        {props.channel}
                    </p>
                </div>   
            </div>
        </Link>
    )

}

export default SideVideo