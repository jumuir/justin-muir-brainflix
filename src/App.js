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
    sideVideos: videos
  }

  changeMainVideo = (videoId) => {
    const newMainVideo = videoDetails.filter(details => details.id === videoId);
    this.setState({ mainVideo:newMainVideo[0] });
  }


  render() {
    return (
      <>
      <Header />
      <VideoPlayer mainVideo={this.state.mainVideo} />
      <VideoInfo mainVideo={this.state.mainVideo}/>
      <CommentsArea mainVideo={this.state.mainVideo}/>
      <VideosList mainVideo={this.state.mainVideo} changeMainVideo={this.changeMainVideo} sideVideos={this.state.sideVideos}/>
      </>
    );
  }
}

export default App;
