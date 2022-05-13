import './VideoPlayer.scss';
import playImg from '../../assets/images/icons/play.svg';
import pauseImg from '../../assets/images/icons/pause.svg';
import fullscreenImg from '../../assets/images/icons/fullscreen.svg';
import closeImg from '../../assets/images/icons/close_fullscreen.svg';
import volumeImg from '../../assets/images/icons/volume_up.svg';
import muteImg from '../../assets/images/icons/volume_off.svg';


const VideoPlayer = (props) => {
    const mainVideo = props.mainVideo;

    return (<>
        <section className='video-container'>
            <div className='video-controls'>
                <img className='video-button' src={playImg}/>
                <img className='video-button' src={pauseImg}/>
                <img className='video-button' src={fullscreenImg}/>
                <img className='video-button' src={closeImg}/>
                <img className='video-button' src={volumeImg}/>
                <img className='video-button' src={muteImg}/>
            </div>
            <video controls poster={mainVideo.image}>

            </video>
        </section>
    </>
    )

}

export default VideoPlayer