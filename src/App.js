import { Component } from 'react';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideosList from './components/VideosList/VideosList';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import './App.scss';



class App extends Component {
  state = {
    mainVideo: videoDetails[0],
    sideVideos: videos
  }

  changeSideVideos = (mainVideo) => {
    const newVideoArr = videos.slice();
    newVideoArr.filter(video => video.id !== mainVideo.id);
    this.setState({ sideVideos:newVideoArr });
  }

  changeMainVideo = (video) => {
    videoDetails.filter()
  }

  render() {
    return (
      <>
      <Header />
      <VideoPlayer mainVideo={this.state.mainVideo} />
      <VideoInfo mainVideo={this.state.mainVideo} />
      <VideosList changeSideVideos={this.changeSideVideos} sideVideos={this.state.sideVideos}/>
      </>
    );
  }
}

export default App;
