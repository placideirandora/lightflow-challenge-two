import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import AlbumPhotos from './pages/AlbumPhotos';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/albums/id/photos' component={AlbumPhotos} exact />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;