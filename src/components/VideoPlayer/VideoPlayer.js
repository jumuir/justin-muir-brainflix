import './VideoPlayer.scss';
import playImg from '../../assets/images/icons/play.svg';
import fullscreenImg from '../../assets/images/icons/fullscreen.svg';
import volumeImg from '../../assets/images/icons/volume_up.svg';


const VideoPlayer = (props) => {
    const mainVideo = props.mainVideo;

    return (
        <section className='video-container'>
            <video poster={mainVideo.image}></video>
            
            <div className='video-controls__container'>
                <div className='video-controls'>
                    <img className='video-button' src={playImg}  alt=''/>
                </div>
                <div className='video-controls video-controls__center'>
                    <div className='video-timeline'></div>
                    <span className='video-duration'>0:00/{mainVideo.duration}</span>
                </div>
                <div className='video-controls'>
                    <img className='video-button' src={fullscreenImg} alt=''/>
                    <img className='video-button' src={volumeImg} alt=''/>
                </div>
            </div>
        </section>
    )

}

export default VideoPlayer