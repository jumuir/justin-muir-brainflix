import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import './App.scss';


function App() {
  const sideVideos = videos;
  const mainVideo = videos[0];

  return (
    <>
    <Header />
    <VideoPlayer mainVideo={mainVideo} />
    </>
  );
}

export default App;
