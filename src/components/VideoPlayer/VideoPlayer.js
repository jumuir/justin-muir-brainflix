import './VideoPlayer.scss';


const VideoPlayer = (props) => {
    const mainVideo = props.mainVideo;

    return (<>
        <section className='video-container'>
            <video controls poster={mainVideo.image}>

            </video>
        </section>
    </>
    )

}

export default VideoPlayer