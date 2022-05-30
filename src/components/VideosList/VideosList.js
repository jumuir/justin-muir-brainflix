import './VideosList.scss';
import SideVideo from '../SideVideo/SideVideo';
import { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

class VideosList extends Component {
    state = {
        sideVideos : [],
    }

    componentDidMount() {
        axios.get(URL).then(res => {
            console.log(res.data);
            this.setState({ sideVideos: res.data });
        }).catch(err => {
            console.log(err);
        })
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
                />)}
            
        </section>)
    }
}

export default VideosList