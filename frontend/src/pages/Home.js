import {useSelector, shallowEqual} from 'react-redux';
import {Typography} from '@material-ui/core';
import Post from '../components/Post';
import './Home.css';

const Home = () => {
    const postsState = useSelector(state => state, shallowEqual);
    const posts = [];
    for (const [key, value] of Object.entries(postsState)) {
        posts.push(<Post key={key} {...value} id={key} />)
    };

    return (
        <div className="Home">
            <Typography variant="h5" component="h5" className="Home-header">
                Welcome to Microblog, our innovative site for sharing a bunch of shit that no one will probably ever read.
            </Typography>
            {posts}
        </div>
    );
};

export default Home