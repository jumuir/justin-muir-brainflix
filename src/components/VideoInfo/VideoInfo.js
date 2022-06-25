import './VideoInfo.scss';
import { dateMaker } from '../../utilities/helper-functions';
import likesImg from '../../assets/images/icons/likes.svg';
import viewsImg from '../../assets/images/icons/views.svg';
import { useEffect, useState } from 'react';

const VideoInfo = (props) => {
    const mainVideo = props.mainVideo;
    const timeDiff = (new Date ()) - (new Date(mainVideo.timestamp));
    const [liked, setLiked] = useState(false);
    const date = dateMaker(timeDiff);

    const likeHandler = (e) => {
        if(!liked) {
            setLiked(true);
            e.target.style.filter = 'invert(.5) sepia(1) saturate(5) hue-rotate(315deg)';
            props.likeVideo();
        }
    }

    useEffect(() => {
        setLiked(false);
        document.getElementById('likeImg').style.filter = '';
    }, [props.mainVideo.id]);

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
                    <span>{Number(mainVideo.views).toLocaleString()}</span>
                </div>
                <div className='video-info__date'>
                    <p>{date}</p>
                </div>
                <div className='video-info__likes'>
                    <img id='likeImg' onClick={likeHandler} src={likesImg} alt=''/>
                    <span>{Number(mainVideo.likes).toLocaleString()}</span>
                </div>
            </div>

            <div className='video-info__description-container'>
                <p className='video-info__description'>{mainVideo.description}</p>
            </div>
        </section>
    )

}

export default VideoInfo;