import { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideosList from '../../components/VideosList/VideosList';
import CommentsArea from '../../components/CommentsArea/CommentsArea';
import './VideoPage.scss';
import axios from 'axios';

const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;
const API_URL = `https://project-2-api.herokuapp.com/`;

class VideoPage extends Component {
    state = {
        sideVideos: [],
        videoDetails: {}
    }

    videoURL = id => {
        return `${API_URL}videos/${id}${API_KEY}`;
    }
    
    fetchVideo = () => {
        const currentMainVideoId = this.props.match.params.id || this.state.videoDetails.id;

            axios.get(this.videoURL(currentMainVideoId)).then(res => {
                this.setState({videoDetails: res.data});
            }).catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () =>{
        axios.get(`${API_URL}videos${API_KEY}`).then(res => {
            this.setState({ sideVideos: res.data, videoDetails: res.data[0] }, () => {this.fetchVideo()});        
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.fetchVideo();
        }
    }

    addComment = (comment) => {
        const newComment = {
            name: "BrainStation Man",
            comment: comment
        };
        axios.post(`${API_URL}videos/${this.state.videoDetails.id}/comments${API_KEY}`, newComment).then(() => this.fetchVideo()).catch(err => console.log(err));
    }

    deleteComment = (id) => {
        const delConfirm = window.confirm("are you sure you want to delete this comment?");

        if (delConfirm) {
            axios.delete(`${API_URL}videos/${this.state.videoDetails.id}/comments/${id}${API_KEY}`)
            .then(_success => {
                this.fetchVideo();
            }).catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return (
        <>
        <VideoPlayer mainVideo={this.state.videoDetails} />
        <div className='desktop-columns'>
            <div className='desktop-columns__left'>
                <VideoInfo mainVideo={this.state.videoDetails}/>
                <CommentsArea addComment={this.addComment} deleteComment={this.deleteComment} mainVideo={this.state.videoDetails}/>
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