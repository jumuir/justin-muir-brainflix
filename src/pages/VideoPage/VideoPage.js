import { Component } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideosList from '../../components/VideosList/VideosList';
import CommentsArea from '../../components/CommentsArea/CommentsArea';
import './VideoPage.scss';

const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;
const API_URL = `http://localhost:8080/`;

class VideoPage extends Component {
    state = {
        sideVideos: [],
        mainVideoDetails: {}
    }

    videoURL = id => {
        return `${API_URL}videos/${id}${API_KEY}`;
    }
    
    fetchMainVideo = (id) => {
        const currentMainVideoId = id || this.props.match.params.id || this.state.mainVideoDetails.id;

            axios.get(this.videoURL(currentMainVideoId)).then(res => {
                this.setState({mainVideoDetails: res.data});
            }).catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () =>{
        axios.get(`${API_URL}videos${API_KEY}`).then(res => {
            this.setState({ sideVideos: res.data, mainVideoDetails: res.data[0] }, () => {this.fetchMainVideo()});        
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if(this.props.match.path === '/') {
                this.fetchMainVideo(this.state.sideVideos[0].id);
            } else {
            this.fetchMainVideo();
            }
        }
    }

    addComment = (comment) => {
        if(comment.length === 0) {
            window.alert('Comment can not be empty.');
        } else {
            const newComment = {
                name: "BrainStation Man",
                comment: comment
            };
            axios.post(`${API_URL}videos/${this.state.mainVideoDetails.id}/comments${API_KEY}`, newComment).then(() => this.fetchMainVideo()).catch(err => console.log(err));
        }
    }

    deleteComment = (id) => {
        const delConfirm = window.confirm("Are you sure you want to delete this comment?");

        if (delConfirm) {
            axios.delete(`${API_URL}videos/${this.state.mainVideoDetails.id}/comments/${id}${API_KEY}`)
                .then(_success => {
                    this.fetchMainVideo();
                }).catch(error => {
                    console.log(error);
                });
        }
    }

    likeVideo = () => {
        axios.put(`${API_URL}videos/${this.state.mainVideoDetails.id}/likes${API_KEY}`)
            .then(_success => {
                this.fetchMainVideo();
            }).catch(error => {
                console.log(error);
            });
    }

    addView = () => {
        axios.put(`${API_URL}videos/${this.state.mainVideoDetails.id}/views${API_KEY}`)
            .then(_success => {
                this.fetchMainVideo();
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
        <>
        <VideoPlayer mainVideo={this.state.mainVideoDetails} addView={this.addView} />
        <div className='desktop-columns'>
            <div className='desktop-columns__left'>
                <VideoInfo mainVideo={this.state.mainVideoDetails} likeVideo={this.likeVideo}/>
                <CommentsArea addComment={this.addComment} deleteComment={this.deleteComment} mainVideo={this.state.mainVideoDetails}/>
            </div>
            <div className='desktop-columns__right'>
                <VideosList sideVideos={this.state.sideVideos} mainVideo={this.state.mainVideoDetails}/>
            </div>
        </div>
        </>
        );
    }
}

export default VideoPage;