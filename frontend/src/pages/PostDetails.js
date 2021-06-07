import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {getPost, deletePost} from '../actions';
import {Typography, IconButton, Divider, CircularProgress} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import PostForm from './PostForm';
import Comments from '../components/Comments';
import Votes from '../components/Votes';
import './PostDetails.css';

const PostDetails = () => {
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const post = useSelector(state => state.posts[id], shallowEqual);
    const handleDelete = () => {
        dispatch(deletePost(id));
        history.push('/');
    };

    useEffect(() => dispatch(getPost(id)), [dispatch, id]);
    
    let component;
    if (!post) {
        component = <CircularProgress className="spinner" />
    } else if (editing === true) {
        const INITIAL_FORM = {title: post.title, description: post.description, body: post.body};
        component = <PostForm initialForm={INITIAL_FORM} title="Edit Post" editing={editing} setEditing={setEditing} />
    } else {
        component = (
            <>
                <div className="PostDetails-header">
                    <Typography variant="h4" component="h4" className="PostDetails-title">
                        {post.title}
                    </Typography>
                    <IconButton size="small" onClick={() => setEditing(true)}>
                        <Edit color="primary" />
                    </IconButton>
                    <IconButton size="small" onClick={handleDelete}>
                        <Delete color="secondary"  />
                    </IconButton>
                </div>
                <div className="PostDetails-2nd-header">
                    <Typography component="p" className="PostDetails-description">
                        <em>{post.description}</em>
                    </Typography>
                    <Votes postId={post.id} votes={post.votes} />
                </div>
                <Typography component="p">
                    {post.body}
                </Typography>
                <Divider className="PostDetails-divider" />
                <Comments comments={post.comments} postId={post.id} />
            </>
        );
    };
    return component;
};

export default PostDetails;