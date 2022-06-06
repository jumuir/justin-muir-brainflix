import './VideoPlayer.scss';
import { useEffect, useRef, useState } from 'react';
import { secondsToTime } from '../../utilities/helper-functions';


const VideoPlayer = (props) =>  {
    const videoElem = useRef(null);

    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        isMuted: false,
        isFullscreen: false
    });
    

    const toggleFullscreen = () => {

        if (!playerState.isFullscreen) {
            if (videoElem.current.requestFullscreen) {
                videoElem.current.requestFullscreen();
            } else if (videoElem.current.webkitRequestFullscreen) {
                videoElem.current.webkitRequestFullscreen();
            } else if (videoElem.current.msRequestFullscreen) {
                videoElem.current.msRequestFullscreen();
            }
        }

        // this code doesn't do anything since the fullscreen video reverts to regular controls
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    }

    const handleOnTimeUpdate = () => {
        const progress = (videoElem.current.currentTime / videoElem.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        });

        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', playerState.progress);
        }
    };
    
    const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        videoElem.current.currentTime = (videoElem.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    useEffect(() => {
        playerState.isPlaying
            ? videoElem.current.play()
            : videoElem.current.pause();
        }, [playerState.isPlaying]);

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };
    
    // trying to reset video player state on page switch
    // useEffect(() => {
    //     return () => {
    //         setPlayerState({
    //             isPlaying: false,
    //             progress: 0,
    //             isMuted: false,
    //             isFullscreen: false
    //         })
    //     }
    // }, [videoElem]);

    const handleEnd = () => {
        setPlayerState({
            ...playerState,
            progress: 100,
            isPlaying: !playerState.isPlaying,
        });

        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', 100);
        }
    }
        
    useEffect(() => {
        playerState.isMuted
            ? (videoElem.current.muted = true)
            : (videoElem.current.muted = false);
        }, [playerState.isMuted]);

    return (
        <section className='video-container'>
            <video key={props.mainVideo.id} src={`${props.mainVideo.video}?api_key=niko`} type='video/mp4' ref={videoElem} onTimeUpdate={handleOnTimeUpdate} onEnded={handleEnd} poster={props.mainVideo.image}>
            </video>
            
            <div className='video-controls__container'>
                <div className='video-controls'>
                    {!playerState.isPlaying ? (
                        <button onClick={togglePlay} className='video-button play-btn'></button>
                    ) : (
                        <button onClick={togglePlay} className='video-button pause-btn'></button>
                    )}
                </div>
                <div className='video-controls video-controls__center'>
                    <input className='video-timeline slider-progress' type="range" min="0" max="100" value={playerState.progress} onChange={(e) => handleVideoProgress(e)}/>
                    <span className='video-duration'>{secondsToTime(videoElem?.current?.currentTime)}/{secondsToTime(videoElem?.current?.duration)}</span>
                </div>
                <div className='video-controls'>
                    <button className='video-button fullscreen-btn' onClick={toggleFullscreen}></button>
                    {!playerState.isMuted ? (
                        <button onClick={toggleMute} className='video-button mute-btn'></button>
                    ) : (
                        <button onClick={toggleMute} className='video-button volume-btn'></button>
                    )}
                </div>
            </div>
        </section>
    )

}

export default VideoPlayer