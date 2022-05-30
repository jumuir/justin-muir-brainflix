import { Component } from 'react';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={routerProps => <VideoPage {...routerProps} />} />
          <Route path= '/upload' component={UploadPage} />
          <Route path='/:id' component={VideoPage} />
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
