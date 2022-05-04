import { Component } from 'react';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import './App.scss';



class App extends Component {
  state = {
    mainVideo: videoDetails[0]
  }

  render() {
    return (
      <>
      <Header />
      <VideoPlayer mainVideo={this.state.mainVideo} />
      </>
    );
  }
}

export default App;
