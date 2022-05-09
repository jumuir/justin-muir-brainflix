import './VideoInfo.scss';
import likesImg from '../../assets/images/icons/likes.svg';
import viewsImg from '../../assets/images/icons/views.svg';

const VideoInfo = (props) => {
    const mainVideo = props.mainVideo;
    const title = mainVideo.title;
    const channel = mainVideo.channel;
    const likes = mainVideo.likes;
    const views = mainVideo.views;
    const desc = mainVideo.description;
    const timeDiff = (new Date ()) - (new Date(mainVideo.timestamp));
    
    const date = props.dateMaker(timeDiff);

    return (<>
        <section className='video-info__container'>
            
            <div className='video-info__title-container'>
                <h1 className='video-info__title'>{title}</h1>
            </div>

            <div className='video-info__info-container'>
                <div className='video-info__channel'>
                    <p>By {channel}</p>
                </div>
                <div className='video-info__views'>
                    <img src={viewsImg}/>
                    <span>{views}</span>
                </div>
                <div className='video-info__date'>
                    <p>{date}</p>
                </div>
                <div className='video-info__likes'>
                    <img src={likesImg}/>
                    <span>{likes}</span>
                </div>
            </div>

            <div className='video-info__description-container'>
                <p className='video-info__description'>{desc}</p>
            </div>
        </section>
    </>
    )

}

export default VideoInfo