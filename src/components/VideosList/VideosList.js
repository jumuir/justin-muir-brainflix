import './VideosList.scss';
import SideVideo from '../SideVideo/SideVideo';
import { Component } from 'react';
import videos from '../../data/videos.json';

class VideosList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            sideVideos : videos,
        }
    }

    render() {
        return (
        <section className='videos-list__container'>
            <h4 className='videos-list__title'>NEXT VIDEOS</h4>

            {this.state.sideVideos.filter(video => video.id !== this.props.mainVideo.id).map((content) => <SideVideo 
                key={content.id} 
                id={content.id} 
                title={content.title} 
                channel={content.channel} 
                image={content.image} 
                changeMainVideo={this.props.changeMainVideo} 
                />)}
            
        </section>)
    }
}

export default VideosList