import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostDetails from './PostDetails';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/new">
            <PostForm 
                initialForm={{title: "", description: "", body: ""}} 
                title="New Post" 
            />
        </Route>
        <Route exact path="/:id">
            <PostDetails />
        </Route>
    </Switch>
);

export default Routes;