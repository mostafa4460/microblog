import {useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {getTitles} from '../actions';
import {Typography, CircularProgress} from '@material-ui/core';
import Post from '../components/Post';
import './Home.css';

const Home = () => {
    const titles = useSelector(state => state.titles, shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => dispatch(getTitles()), [dispatch, titles]);

    let home;
    if (titles.length === 0) home = <CircularProgress className="spinner" />;
    else home = (
        <div className="Home">
            <Typography variant="h5" component="h5" className="Home-header">
                Welcome to Microblog, our innovative site for sharing a bunch of shit that no one will probably ever read.
            </Typography>
            {titles.map(title => <Post key={title.id} {...title} />)}
        </div>
    );
    return home;
};

export default Home;