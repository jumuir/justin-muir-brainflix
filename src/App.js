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

  changeSideVideos = (mainVideo) => {
    const newVideoArr = videos.slice();
    newVideoArr.filter(video => video.id !== mainVideo.id);
    this.setState({ sideVideos:newVideoArr });
  }

  changeMainVideo = (video) => {
    videoDetails.filter()
  }

  // Diving deeper date function
  dateMaker = timeDiff => {
    let dateDisplayed = '';
    let roundedTime = 0;

    if (timeDiff < 1000) {
        dateDisplayed = 'Just now';
    } 
    else if (timeDiff <= 60000) {
        roundedTime = Math.round(timeDiff / 1000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} second ago`;
        } else {
            dateDisplayed = `${roundedTime} seconds ago`;
        }
    }
    else if (timeDiff <= 3600000) {
        roundedTime = Math.round(timeDiff / 60000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} minute ago`;
        } else {
            dateDisplayed = `${roundedTime} minutes ago`;
        }
    }
    else if (timeDiff <= 86400000) {
        roundedTime = Math.round(timeDiff / 3600000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} hour ago`;
        } else {
            dateDisplayed = `${roundedTime} hours ago`;
        }
    }
    else {
        roundedTime = Math.round(timeDiff / 86400000);
        if (roundedTime === 1) {
            dateDisplayed = `${roundedTime} day ago`;
        } else if (roundedTime > 365) {
            dateDisplayed = "Over a year ago";
        } else {
            dateDisplayed = `${roundedTime} days ago`;
        }
    }

    return dateDisplayed;
}

  render() {
    return (
      <>
      <Header />
      <VideoPlayer mainVideo={this.state.mainVideo} />
      <VideoInfo mainVideo={this.state.mainVideo} dateMaker={this.dateMaker}/>
      <CommentsArea mainVideo={this.state.mainVideo} dateMaker={this.dateMaker}/>
      <VideosList changeSideVideos={this.changeSideVideos} sideVideos={this.state.sideVideos}/>
      </>
    );
  }
}

export default App;
