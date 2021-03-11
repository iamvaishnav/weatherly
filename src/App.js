import './App.css';
import Layout from './components/containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Page404 from './components/ErrorHandling/404';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route path='/error' exact component={Page404} />
                <Route path='/' exact component={Layout} />
            </Switch>
        </div>
    );
}

export default App;
