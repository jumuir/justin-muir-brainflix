import SideVideo from '../SideVideo/SideVideo';
import './VideosList.scss';

const VideosList = (props) => {

        return (
        <section className='videos-list__container'>
            <h4 className='videos-list__title'>NEXT VIDEOS</h4>

            {props.sideVideos.filter(video => video.id !== props.mainVideo.id).map((content) => 
                <SideVideo 
                    key={content.id} 
                    id={content.id} 
                    title={content.title} 
                    channel={content.channel} 
                    image={content.image} 
                />)}
            
        </section>)
}

export default VideosList;