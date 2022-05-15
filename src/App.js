import { Component } from 'react';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideosList from './components/VideosList/VideosList';
import CommentsArea from './components/CommentsArea/CommentsArea';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import './App.scss';


class App extends Component {
  state = {
    mainVideo: videoDetails[0],
    videoDetails: videoDetails
  }

  changeMainVideo = (videoId) => {
    const newMainVideo = this.state.videoDetails.filter(details => details.id === videoId);
    this.setState({ mainVideo:newMainVideo[0] });
  }

  addComment = (comment) => {
    let newDetails = [...videoDetails]
    let now = new Date().getTime();
    newDetails.forEach((vid, index) => {
      if (vid.id === this.state.mainVideo.id) {
        const comms = newDetails[index].comments;
        let newComms = [{
          name: 'Anonymous',
          comment: comment,
          likes: 0,
          timestamp: now
        },...comms];
        
        newDetails[index].comments = newComms;
        this.setState({ videoDetails: newDetails});
        
      }
    });
  }


  render() {
    return (
      <>
      <Header />
      <VideoPlayer mainVideo={this.state.mainVideo} />
      <div className='desktop-columns'>
        <div className='desktop-columns__left'>
          <VideoInfo mainVideo={this.state.mainVideo}/>
          <CommentsArea mainVideo={this.state.mainVideo} addComment={this.addComment}/>
        </div>
        <div className='desktop-columns__right'>
          <VideosList mainVideo={this.state.mainVideo} changeMainVideo={this.changeMainVideo} sideVideos={videos}/>
        </div>
      </div>
      </>
    );
  }
}

export default App;
