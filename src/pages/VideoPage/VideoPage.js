import { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideosList from '../../components/VideosList/VideosList';
import CommentsArea from '../../components/CommentsArea/CommentsArea';
import './VideoPage.scss';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

class VideoPage extends Component {
    state = {
        sideVideos: [],
        videoDetails: {}
    }

    videoURL = id => {
        return `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`;
    }

    fetchVideo = (id) => {
        const currentMainVideoId = id || this.props.match.params.id || this.state.videoDetails.id;

            axios.get(this.videoURL(currentMainVideoId)).then(res => {
                this.setState({videoDetails: res.data});
            }).catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () =>{
        axios.get(URL).then(res => {
            this.setState({ sideVideos: res.data, videoDetails: res.data[0] });
            this.fetchVideo(res.data[0].id);
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.fetchVideo();
        }
    }

    render() {
        return (
        <>
        <VideoPlayer mainVideo={this.state.videoDetails} />
        <div className='desktop-columns'>
            <div className='desktop-columns__left'>
                <VideoInfo mainVideo={this.state.videoDetails}/>
                <CommentsArea mainVideo={this.state.videoDetails}/>
            </div>
            <div className='desktop-columns__right'>
                <VideosList sideVideos={this.state.sideVideos} mainVideo={this.state.videoDetails}/>
            </div>
        </div>
        </>
        );
    }
}

export default VideoPage;
