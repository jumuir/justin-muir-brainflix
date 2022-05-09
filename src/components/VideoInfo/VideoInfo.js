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
    
    // Diving deeper date function
    const dateMaker = timeDiff => {
        let dateDisplayed = '';
        let roundedTime = 0;
    
        if (timeDiff < 1000) {
            dateDisplayed = 'Just now';
        } 
        else if (timeDiff <= 60000) {
            roundedTime = Math.round(timeDiff / 1000);
            if (roundedTime === 1) {
                dateDisplayed = `${roundedTime} second ago`;
            } else {
                dateDisplayed = `${roundedTime} seconds ago`;
            }
        }
        else if (timeDiff <= 3600000) {
            roundedTime = Math.round(timeDiff / 60000);
            if (roundedTime === 1) {
                dateDisplayed = `${roundedTime} minute ago`;
            } else {
                dateDisplayed = `${roundedTime} minutes ago`;
            }
        }
        else if (timeDiff <= 86400000) {
            roundedTime = Math.round(timeDiff / 3600000);
            if (roundedTime === 1) {
                dateDisplayed = `${roundedTime} hour ago`;
            } else {
                dateDisplayed = `${roundedTime} hours ago`;
            }
        }
        else {
            roundedTime = Math.round(timeDiff / 86400000);
            if (roundedTime === 1) {
                dateDisplayed = `${roundedTime} day ago`;
            } else if (roundedTime > 365) {
                dateDisplayed = "Over a year ago";
            } else {
                dateDisplayed = `${roundedTime} days ago`;
            }
        }
    
        return dateDisplayed;
    }
    
    const date = dateMaker(timeDiff);

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