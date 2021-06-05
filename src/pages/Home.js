import {Typography} from '@material-ui/core';
import Post from '../components/Post';
import './Home.css';

const Home = ({posts}) => (
    <div className="Home">
        <Typography variant="h5" component="h5" className="Home-header">
            Welcome to Microblog, our innovative site for sharing a bunch of shit that no one will probably ever read.
        </Typography>
        {posts.map(post => <Post key={post.id} {...post} /> )}
    </div>
);

export default Home