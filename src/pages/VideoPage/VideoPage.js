import { Component } from 'react';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideosList from '../../components/VideosList/VideosList';
import CommentsArea from '../../components/CommentsArea/CommentsArea';
import './VideoPage.scss';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

class VideoPage extends Component {
    state = {
        mainVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
        videoDetails: {
            "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
            "title": "",
            "channel": "",
            "image": "",
            "description": "",
            "views": "",
            "likes": "",
            "duration": "",
            "video": "",
            "timestamp": 0,
            "comments": []
        } 
    
    }

    videoURL = id => {
        return `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`;
    }

    fetchVideo = () => {
        let currentMainVideoId = this.props.match.params.id || this.state.mainVideoId;

        if (!currentMainVideoId) {
            currentMainVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
        }

        axios.get(this.videoURL(currentMainVideoId)).then(res => {
            console.log(res.data);
            this.setState({videoDetails: res.data, mainVideoId: currentMainVideoId});
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount(){
        this.fetchVideo()
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.fetchVideo()
        }
    }

    render() {
        return (
        <>
        <Header />
        <VideoPlayer mainVideo={this.state.videoDetails} />
        <div className='desktop-columns'>
            <div className='desktop-columns__left'>
                <VideoInfo mainVideo={this.state.videoDetails}/>
                <CommentsArea mainVideo={this.state.videoDetails}/>
            </div>
            <div className='desktop-columns__right'>
                <VideosList mainVideo={this.state.videoDetails}/>
            </div>
        </div>
        </>
        );
    }
}

export default VideoPage;
