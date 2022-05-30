import { Component } from 'react';
import VideoPage from './pages/VideoPage/VideoPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={VideoPage} />
          <Route path= '/upload' component={VideoPage} />
          <Route path='/:id' component={VideoPage} />
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
