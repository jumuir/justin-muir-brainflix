import './VideoInfo.scss';
import { dateMaker } from '../../utilities/helper-functions';
import likesImg from '../../assets/images/icons/likes.svg';
import viewsImg from '../../assets/images/icons/views.svg';

const VideoInfo = (props) => {
    const mainVideo = props.mainVideo;
    const timeDiff = (new Date ()) - (new Date(mainVideo.timestamp));
    
    const date = dateMaker(timeDiff);

    return (
        <section className='video-info__container'>
            
            <div className='video-info__title-container'>
                <h1 className='video-info__title'>{mainVideo.title}</h1>
            </div>

            <div className='video-info__info-container'>
                <div className='video-info__channel'>
                    <p>By {mainVideo.channel}</p>
                </div>
                <div className='video-info__views'>
                    <img src={viewsImg} alt=''/>
                    <span>{mainVideo.views}</span>
                </div>
                <div className='video-info__date'>
                    <p>{date}</p>
                </div>
                <div className='video-info__likes'>
                    <img src={likesImg} alt=''/>
                    <span>{mainVideo.likes}</span>
                </div>
            </div>

            <div className='video-info__description-container'>
                <p className='video-info__description'>{mainVideo.description}</p>
            </div>
        </section>
    )

}

export default VideoInfo