import { Switch, Route, BrowserRouter } from 'react-router-dom';

import VideoPage from './pages/VideoPage/VideoPage';
import Header from './components/Header/Header';
import UploadPage from './pages/UploadPage/UploadPage';

const App = () =>{

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact render={routerProps => <VideoPage {...routerProps} />} />
        <Route path= '/upload' component={UploadPage} />
        <Route path='/:id' component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
